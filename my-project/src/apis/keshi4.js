import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(VO) {
        return axios({
            method: 'post',
            url: '/api/ksb/insert',
            data: {
                "ksbh": VO.ksbh,
                "ksmc": VO.ksmc,
                "ksdz": VO.ksdz,
                "ksjj": VO.ksjj,
                
            }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/ksb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(VO) {
        return axios({
            method: 'post',
            url: '/api/ksb/update',
            // data:supporterData
            data: {
                "ksbh": VO.ksbh,
                "ksmc": VO.ksmc,
                "ksdz": VO.ksdz,
                "ksjj": VO.ksjj,
                
            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/ksb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/ksb/selectByName/' + name
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/ksb/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/ksb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
     //分页
     selectByksbh(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Ygb/selectByksbh/'+ pageVo.ksbh + '/' +pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    login(VO){
        return axios({
            method: 'post',
            url: '/api/ksb/login',
            data: {
                    "name": VO.name,
                    "pwd": VO.pwd,
            },
        
        })
    },
}
        
          

