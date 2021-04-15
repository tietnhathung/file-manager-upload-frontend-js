import axios from "axios";

export const state = (dataSetUp)=>{
    return {
        dataSetUp:dataSetUp,
        fileFilter : {
            PageSize: 24,
            Keyword: "",
            ContentType: "",
            CreateAt:""
        },
        NextPage:null,
        ListFiles: [],
        ListCreateAt: [],
        ListTypes: [],
        ActiveFile:{},
        FileBeingUploaded:{}
    }
};

export const getters = {
    StateListFiles: state => state.ListFiles,
    StateActiveFile: state => state.ActiveFile,
    StateListTypes: state => state.ListTypes,
    StateListCreateAt: state => state.ListCreateAt,
    StateListActiveFiles: state => {
        if (state.dataSetUp.multiSelect){
            return state.ListFiles.filter(file => file.isActive)
        }else {
            return state.ListFiles.find(file => file.isActive)
        }
    },
    StateFileBeingUploaded: state => state.FileBeingUploaded
};

export const mutations = {
    unShiftListTypes(state , file){
        state.ListFiles.unshift(file);
    },
    PushToFileBeingUploaded(state ,{index, info}){
        state.FileBeingUploaded[index] = info;
    },
    UpdateFileBeingUploaded(state ,{index, field ,data}){
        state.FileBeingUploaded[index][field] = data;
    },
    setKeyword(state , keyword){
        state.fileFilter.Keyword  = keyword
    },
    setContentType(state , contentType){
        state.fileFilter.ContentType  = contentType
    },
    setCreateAt(state , createAt){
        state.fileFilter.CreateAt  = createAt
    },
    setNextPage(state,nextPage){
        state.NextPage  = nextPage
    },
    setListFiles(state,listFiles) {
        state.ListFiles = listFiles;
    },
    setListTypes(state,listTypes){
        state.ListTypes = listTypes;
    },
    setListCreateAt(state,listCreateAt){
        state.ListCreateAt = listCreateAt;
    },
    setActive(state,_file){
        _file.isActive = !_file.isActive;
        if(!state.dataSetUp.multiSelect && state.ActiveFile.id !== _file.id ){
            state.ActiveFile.isActive = false;
        }
        if(_file.isActive === true){
            state.ActiveFile = _file;
        }else{
            state.ActiveFile = {};
        }
    },
    setUnActive(state){
        for(let i = 0 ; i < state.ListFiles.length ; i++){
            state.ListFiles[i].isActive = false;
        }
        state.ActiveFile = {};
    },
    removeActiveFile(state){
        state.ActiveFile = {};
    },
    setRemoveFile(state,_file){
        if(_file.id === state.ActiveFile.id){
            state.ActiveFile = {};
        }
        let indexOfFile = state.ListFiles.findIndex( file => file.id === _file.id );
        state.ListFiles.splice(indexOfFile, 1);
    }
};

export const actions = {
    setDataUnActive({commit}){
        commit("setUnActive");
    },

    setDataKeyword({commit},keyword){
        commit("setKeyword",keyword);
    },

    setDataContentType({commit},contentType){
        commit("setContentType",contentType);
    },

    setDataCreateAt({commit},createAt){
        commit("setCreateAt",createAt);
    },

    fetchFiles({commit, state}) {
        axios.get("/Admin/File/GetAllListFile",{params: {...state.fileFilter}})
            .then((response) => {
                let resData = response.data;
                if (resData.succeeded){
                    let listFiles =  resData?.listFiles?.map(function (file) {
                        file.isActive = false;
                        return file;
                    });
                    commit('setNextPage',resData.nextPage)
                    commit('setListFiles',listFiles)
                    commit('removeActiveFile')
                }
            })
    },

    fetchFilters({commit, state}) {
        axios.get("/Admin/File/GetFilterFile")
            .then((response) => {
                let resData = response.data;
                if (resData.succeeded){
                    commit("setListTypes",resData.content.listTypes);
                    commit("setListCreateAt",resData.content.listCreatedAt);
                }
            })
    },

    loadMoreFiles({commit, state}){
        if(state.NextPage){
            axios.get(state.NextPage,{
                params: {
                    ...state.fileFilter,
                    pageindex:state.pageindex
                }})
                .then((response) => {
                    let resData = response.data;
                    if (resData.succeeded){
                        let listNewFiles =  resData?.listFiles?.map(function (file) {
                            file.isActive = false;
                            return file;
                        });
                        let listFiles = [...state.ListFiles,...listNewFiles];
                        commit('setNextPage',resData.nextPage)
                        commit('setListFiles',listFiles)
                    }
                })
        }
    },

    uploadFile({commit,state}, {file , url}){
        let index;
        let oldIndex = Object.keys(state.FileBeingUploaded);
        do {
            index = Math.random().toString(36).substring(7);
        }
        while (oldIndex.includes(index));
        console.log(file)
        commit("PushToFileBeingUploaded",{index : index , info :{
                urlPreview:url,
                status:0,
                name: file.name,
                process: 0,
                message: "",
            } });
        
        let formData = new FormData();
        formData.append('file', file);
        axios.post( "/Admin/File/UploadAFile",formData,
            {
                headers: {
                    "RequestVerificationToken": state.dataSetUp.xsrf,
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    commit("UpdateFileBeingUploaded",{index : index ,field:'process', data:percentCompleted });
                }
            }
        ).then(function(resqponse){
            let resData = resqponse.data;
            if (resData.msg === "successful"){
                commit('unShiftListTypes',resData.content.file);
                commit("UpdateFileBeingUploaded",{index : index ,field:'status', data:1 });
                commit("UpdateFileBeingUploaded",{index : index ,field:'message', data:resData.msg  });
            }else{
                commit("UpdateFileBeingUploaded",{index : index ,field:'status', data:2 });
                commit("UpdateFileBeingUploaded",{index : index ,field:'message', data:resData.content  });
            }
        })
        .catch(function(error){
            commit("UpdateFileBeingUploaded",{index : index ,field:'status', data:2 });
            commit("UpdateFileBeingUploaded",{index : index ,field:'message', data:error });
        });
    },

    activeFiles({commit},file){
        commit('setActive',file)
    },

    removeFile({commit,state},file){
        let confim;
        if (state.dataSetUp.confirmDelete){
            confim = state.dataSetUp.confirmDelete;
        }else{
            confim = ()=>{
                return confirm("Bạn có chắc chắn xóa dữ liệu này?");
            };
        }
        if (confim()){
            axios({
                method: 'post',
                headers: {
                    "RequestVerificationToken": document.querySelector('input[name="__RequestVerificationToken"]').value
                },
                url:  `/Admin/File/Delete/${file.id}`
            }).then((response) => {
                let resData = response.data;
                if (resData.msg === "successful"){
                    commit('setRemoveFile',file)
                }
            })
        }
    }
};

