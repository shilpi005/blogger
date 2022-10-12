export default {
    namespaced: true,
    state: {
        addPost: {
            type: "",
            id: "",
            show: false,

        },
        editPost:{
            type: "",
            id: "",
            show: false,
        },
        
    },
    getters: {
        getAddPost: (state) => state.addPost,
        getEditPost: (state) =>state.editPost,
       
    },
    mutations: {
        ADD_POST(state, obj) {
            console.log(obj.type)
            if (obj.show) {
                state.addPost.id = obj.id ? obj.id : null;
                state.addPost.type = obj.type ? obj.type : "";
            }
            state.addPost.show = obj.show;
        },
        EDIT_POST(state, obj) {
            if (obj.show) {
                state.editPost.id = obj.id ? obj.id : null;
                state.editPost.type = obj.type ? obj.type : "";
            }
            state.editPost.show = obj.show;
        },
        
    },
    actions: {
        addPost({ commit }, obj) {
            commit("ADD_POST", obj);
        },
        editPost({ commit }, obj) {
            commit("EDIT_POST", obj);
        },
       
    },
};