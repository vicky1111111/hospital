import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(VO) {
        return axios({
            method: 'post',
            url: '/api/Jcxmb/insert',
            data: {
                "xmbh": VO.xmbh,
                "xmmc": VO.xmmc,
                "xmfy": VO.xmfy,
                "xmms": VO.xmms,
                
            }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/Jcxmb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(VO) {
        return axios({
            method: 'post',
            url: '/api/Jcxmb/update',
            // data:supporterData
            data: {
                "xmbh": VO.xmbh,
                "xmmc": VO.xmmc,
                "xmfy": VO.xmfy,
                "xmms": VO.xmms,
                
            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/Jcxmb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/Jcxmb/selectByName/' + name
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Jcxmb/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Jcxmb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    
}
        
          

