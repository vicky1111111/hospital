import axios from 'axios'
import Cookies from 'js-cookie'

export default {
    
    //添加
    insert(VO) {
        return axios({
            method: 'post',
            url: '/api/Ypb/insert',
            data: {
                "ypbh": VO.ypbh,
                "ypmc": VO.ypmc,
                "ypgn": VO.ypgn,
                "ypjg": VO.ypjg,

                "ypkc": VO.ypkc,
                "scdw": VO.scdw,
                "scrq": VO.scrq,
                "gqrq": VO.gqrq,

                }

        })
    },
    addlist() {
        return axios({
            method: 'post',
            url: '/api/Ypb/addlist',
        })
    },
    
	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/Ypb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(VO) {
        return axios({
            method: 'post',
            url: '/api/Ypb/update',
            // data:supporterData
            data: {
                "ypbh": VO.ypbh,
                "ypmc": VO.ypmc,
                "ypgn": VO.ypgn,
                "ypjg": VO.ypjg,

                "ypkc":VO.ypkc,
                "scdw": VO.scdw,
                "scrq": VO.scrq,
                "gqrq": VO.gqrq,
            


            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/Ypb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/Ypb/selectByName/' + name
        })
    },
    
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Ypb/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Ypb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
}
        
          

