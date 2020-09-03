import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(VO) {
        return axios({
            method: 'post',
            url: '/api/Hjb/insert',
            data: {
                "id": VO.id,
                "jzkh": VO.jzkh,
                "jfje": VO.jfje,
                "jflx": VO.jflx,
                
            }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/Hjb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(VO) {
        return axios({
            method: 'post',
            url: '/api/Hjb/update',
            // data:supporterData
            data: {
                "id": VO.id,
                "jzkh": VO.jzkh,
                "jfje": VO.jfje,
                "jflx": VO.jflx,
                
            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/Hjb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/Hjb/selectByName/' + name
        })
    },

     //根据id查询用户信息
     selectjflx() {
        return axios({
            method: 'get',
            url: '/api/Hjb/selectjflx'
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Hjb/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Hjb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    
}
        
          

