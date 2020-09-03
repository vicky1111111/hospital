import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(VO) {
        return axios({
            method: 'post',
            url: '/api/Ggb/insert',
            data: {
                "ggbh": VO.ggbh,
                "ggbt": VO.ggbt,
                "ygbh": VO.ygbh,
                "ggnr": VO.ggnr,
                
            }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/Ggb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(VO) {
        return axios({
            method: 'post',
            url: '/api/Ggb/update',
            // data:supporterData
            data: {
                "ggbh": VO.ggbh,
                "ggbt": VO.ggbt,
                "ygbh": VO.ygbh,
                "ggnr": VO.ggnr,
                
            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/Ggb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/Ggb/selectByName/' + name
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Ggb/listALL'
        })
    },
 
    //分页
    selectByygbh(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Ggb/selectByygbh/' +  pageVo.ygbh + '/'+  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Ggb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    
}
        
          

