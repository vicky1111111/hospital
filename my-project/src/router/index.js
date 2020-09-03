import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/main/Login'
import Main from '@/components/Main'
import test1 from '@/components/test1'
import main1 from '@/main/main1'

import menu0 from '@/main/menu/menu0'


import addbrb from '@/main/guahao/addbrb'
import brb from '@/main/guahao/brb'
import brb2 from '@/main/guahao/brb2'
import guahao from '@/main/guahao/guahao'
import ghb from '@/main/guahao/ghb'
import ghb2 from '@/main/guahao/ghb2'

import addksb from '@/main/keshi/addksb'
import ksb from '@/main/keshi/ksb'
import ksb2 from '@/main/keshi/ksb2'

import addblb from '@/main/bingli/addblb'
import blb from '@/main/bingli/blb'

import addjcxmb from '@/main/jiancha/addjcxmb'
import jcxmb from '@/main/jiancha/jcxmb'
import jcxmb2 from '@/main/jiancha/jcxmb2'
import jcshoufei from '@/main/jiancha/jcshoufei'

import addcfb from '@/main/chufang/addcfb'
import cfb from '@/main/chufang/cfb'

import huajia from '@/main/huajia/huajia'
import hjb from '@/main/huajia/hjb'
import hjb2 from '@/main/huajia/hjb2'

import addygb from '@/main/yonghu/addygb'
import ygb from '@/main/yonghu/ygb'

import addypb from '@/main/yaopin/addypb'
import ypb from '@/main/yaopin/ypb'
import ypb2 from '@/main/yaopin/ypb2'
import qxdj from '@/main/xitong/qxdj'

import gonggaolan from '@/main/yonghu/gonggaolan'
import ggb from '@/main/xitong/ggb'
import addggb from '@/main/yonghu/addggb'
import grggb from '@/main/yonghu/grggb'

import grxinxi from '@/main/yonghu/grxinxi'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/menu0',
      name:'menu0',
      component: menu0,
      meta: {
        title: 'menu0'
      }, children:[
        {
          path:'/addbrb',
          name:'addbrb',
          component: addbrb,
          meta: {
            title: '添加就诊卡信息'
          }
        }, 
        {
          path:'/brb',
          name:'brb',
          component: brb,
          meta: {
            title: '病人信息处理'
          }
        },
        {
          path:'/guahao',
          name:'guahao',
          component: guahao,
          meta: {
            title: '挂号'
          }
        },
        {
          path:'/ghb',
          name:'ghb',
          component: ghb,
          meta: {
            title: '挂号信息处理'
          }
        },
        {
          path:'/addblb',
          name:'addblb',
          component: addblb,
          meta: {
            title: '添加病历信息'
          }
        }, 
        {
          path:'/blb',
          name:'blb',
          component: blb,
          meta: {
            title: '病历信息处理'
          }
        },
    
        {
          path:'/addksb',
          name:'addksb',
          component: addksb,
          meta: {
            title: '添加科室'
          }
        },
        {
          path:'/ksb',
          name:'ksb',
          component: ksb,
          meta: {
            title: '科室信息处理'
          }
        },
        {
          path:'/addjcxmb',
          name:'addjcxmb',
          component: addjcxmb,
          meta: {
            title: '添加检查项目'
          }
        },
        {
          path:'/jcxmb',
          name:'jcxmb',
          component: jcxmb,
          meta: {
            title: '检查项目信息处理'
          }
        },
        {
          path:'/jcshoufei',
          name:'jcshoufei',
          component: jcshoufei,
          meta: {
            title: '检查项目收费'
          }
        },
        
        {
          path:'/addygb',
          name:'addygb',
          component: addygb,
          meta: {
            title: '添加员工'
          }
        },
        {
          path:'/ygb',
          name:'ygb',
          component: ygb,
          meta: {
            title: '员工信息处理'
          }
        },
        {
          path:'/addypb',
          name:'addypb',
          component: addypb,
          meta: {
            title: '添加药品'
          }
        },
        {
          path:'/ypb',
          name:'ypb',
          component: ypb,
          meta: {
            title: '药品信息处理'
          }
        },
        {
          path:'/qxdj',
          name:'qxdj',
          component: qxdj,
          meta: {
            title: '修改权限等级'
          }
        },
        {
          path:'/ggb',
          name:'ggb',
          component: ggb,
          meta: {
            title: '公告信息处理'
          }
        },
        
        {
          path:'/gonggaolan',
          name:'gonggaolan',
          component: gonggaolan,
          meta: {
            title: '公告栏'
          }
        },
        {
          path:'/addggb',
          name:'addggb',
          component: addggb,
          meta: {
            title: '发布公告'
          }
        },
        {
          path:'/grggb',
          name:'grggb',
          component: grggb,
          meta: {
            title: '个人公告信息处理'
          }
        },
        {
          path:'/addcfb',
          name:'addcfb',
          component: addcfb,
          meta: {
            title: '添加处方'
          }
        },
        {
          path:'/cfb',
          name:'cfb',
          component: cfb,
          meta: {
            title: '处方信息处理'
          }
        },
        {
          path:'/huajia',
          name:'huajia',
          component: huajia,
          meta: {
            title: '划价收费'
          }
        },
        {
          path:'/hjb',
          name:'hjb',
          component: hjb,
          meta: {
            title: '收入信息处理'
          }
        },
        
        {
          path:'/grxinxi',
          name:'grxinxi',
          component: grxinxi,
          meta: {
            title: '个人信息'
          }
        },
        {
          path:'/brb2',
          component: brb2,
          meta: {
            title: '病人信息处理'
          }
        },
        {
          path:'/ksb2',
          component: ksb2,
          meta: {
            title: '科室信息处理'
          }
        },
        {
          path:'/jcxmb2',
          component: jcxmb2,
          meta: {
            title: '检查项目信息处理'
          }
        },
        {
          path:'/ypb2',
          component: ypb2,
          meta: {
            title: '药品信息处理'
          }
        },
        {
          path:'/hjb2',
          component: hjb2,
          meta: {
            title: '收入信息处理'
          }
        },
        {
          path:'/ghb2',
          component: ghb2,
          meta: {
            title: '挂号信息处理'
          }
        },
    ]
    },
   
    {
      path:'/Login',
      name:'Login',
      component: Login,
      meta: {
        title: '登陆界面'
      }
    },
    {
      path:'/Main',
      name:'Main',
      component: Main,
      meta: {
        title: '主页'
      }
    },
    {
      path:'/main1',
      name:'main1',
      component: main1,
      meta: {
        title: '主页'
      }
    },
    {
      path:'/test1',
      name:'test1',
      component: test1,
      meta: {
        title: '主页'
      }
    },
   
  ]
})

