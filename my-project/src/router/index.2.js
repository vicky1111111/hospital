import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/main/Login'
import menu0 from '@/main/menu/menu0'
import menu1 from '@/main/menu/menu1'
import menu2 from '@/main/menu/menu2'
import menu3 from '@/main/menu/menu3'
import menu4 from '@/main/menu/menu4'

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
      path:'/Login',
      name:'Login',
      component: Login,
      meta: {
        title: '登陆界面'
      }
    },
    {
      path:'/menu0',
      component: menu0,
      meta: {
        title: 'menu0'
      }, children:[
        
    {
      path:'/menu0/addbrb',
      component: addbrb,
      meta: {
        title: '添加就诊卡信息'
      }
    }, 
    {
      path:'/menu0/brb',
      component: brb,
      meta: {
        title: '病人信息处理'
      }
    },
    {
      path:'/menu0/guahao',
      component: guahao,
      meta: {
        title: '挂号'
      }
    },
    {
      path:'/menu0/ghb',
      component: ghb,
      meta: {
        title: '挂号信息处理'
      }
    },
    {
      path:'/menu0/addblb',
      component: addblb,
      meta: {
        title: '添加病历信息'
      }
    }, 
    {
      path:'/menu0/blb',
      component: blb,
      meta: {
        title: '病历信息处理'
      }
    },

    {
      path:'/menu0/addksb',
      component: addksb,
      meta: {
        title: '添加科室'
      }
    },
    {
      path:'/menu0/ksb',
      component: ksb,
      meta: {
        title: '科室信息处理'
      }
    },
    {
      path:'/menu0/addjcxmb',
      component: addjcxmb,
      meta: {
        title: '添加检查项目'
      }
    },
    {
      path:'/menu0/jcxmb',
      component: jcxmb,
      meta: {
        title: '检查项目信息处理'
      }
    },
    {
      path:'/menu0/jcshoufei',
      component: jcshoufei,
      meta: {
        title: '检查项目收费'
      }
    },
    
    {
      path:'/menu0/addygb',
      component: addygb,
      meta: {
        title: '添加员工'
      }
    },
    {
      path:'/menu0/ygb',
      component: ygb,
      meta: {
        title: '员工信息处理'
      }
    },
    {
      path:'/menu0/addypb',
      component: addypb,
      meta: {
        title: '添加药品'
      }
    },
    {
      path:'/menu0/ypb',
      component: ypb,
      meta: {
        title: '药品信息处理'
      }
    },
    {
      path:'/menu0/qxdj',
      component: qxdj,
      meta: {
        title: '修改权限等级'
      }
    },
    {
      path:'/menu0/ggb',
      component: ggb,
      meta: {
        title: '公告信息处理'
      }
    },
    
    {
      path:'/menu0/gonggaolan',
      component: gonggaolan,
      meta: {
        title: '公告栏'
      }
    },
    {
      path:'/menu0/addggb',
      component: addggb,
      meta: {
        title: '发布公告'
      }
    },
    {
      path:'/menu0/grggb',
      component: grggb,
      meta: {
        title: '个人公告信息处理'
      }
    },
    {
      path:'/menu0/addcfb',
      component: addcfb,
      meta: {
        title: '添加处方'
      }
    },
    {
      path:'/menu0/cfb',
      component: cfb,
      meta: {
        title: '处方信息处理'
      }
    },
    {
      path:'/menu0/huajia',
      component: huajia,
      meta: {
        title: '划价收费'
      }
    },
    {
      path:'/menu0/hjb',
      component: hjb,
      meta: {
        title: '收入信息处理'
      }
    },
    
    {
      path:'/menu0/grxinxi',
      component: grxinxi,
      meta: {
        title: '个人信息'
      }
    },
    ]
    },
    {
      path:'/menu1',
      name:'menu1',
      component: menu1,
      meta: {
        title: 'menu1'
      }, children:[
        
        {
          path:'/menu1/addbrb',
          component: addbrb,
          meta: {
            title: '添加就诊卡信息'
          }
        }, 
        {
          path:'/menu1/brb',
          component: brb,
          meta: {
            title: '病人信息处理'
          }
        },
        {
          path:'/menu1/guahao',
          component: guahao,
          meta: {
            title: '挂号'
          }
        },
        {
          path:'/menu1/ghb',
          component: ghb,
          meta: {
            title: '挂号信息处理'
          }
        },
        {
          path:'/menu1/addblb',
          component: addblb,
          meta: {
            title: '添加病历信息'
          }
        }, 
        {
          path:'/menu1/blb',
          component: blb,
          meta: {
            title: '病历信息处理'
          }
        },
    
        {
          path:'/menu1/addksb',
          component: addksb,
          meta: {
            title: '添加科室'
          }
        },
        {
          path:'/menu1/ksb',
          component: ksb,
          meta: {
            title: '科室信息处理'
          }
        },
        {
          path:'/menu1/addjcxmb',
          component: addjcxmb,
          meta: {
            title: '添加检查项目'
          }
        },
        {
          path:'/menu1/jcxmb',
          component: jcxmb,
          meta: {
            title: '检查项目信息处理'
          }
        },
        {
          path:'/menu1/jcshoufei',
          component: jcshoufei,
          meta: {
            title: '检查项目收费'
          }
        },
        
        {
          path:'/menu1/addygb',
          component: addygb,
          meta: {
            title: '添加员工'
          }
        },
        {
          path:'/menu1/ygb',
          component: ygb,
          meta: {
            title: '员工信息处理'
          }
        },
        {
          path:'/menu1/addypb',
          component: addypb,
          meta: {
            title: '添加药品'
          }
        },
        {
          path:'/menu1/ypb',
          component: ypb,
          meta: {
            title: '药品信息处理'
          }
        },
        {
          path:'/menu1/qxdj',
          component: qxdj,
          meta: {
            title: '修改权限等级'
          }
        },
        {
          path:'/menu1/ggb',
          component: ggb,
          meta: {
            title: '公告信息处理'
          }
        },
        
        {
          path:'/menu1/gonggaolan',
          component: gonggaolan,
          meta: {
            title: '公告栏'
          }
        },
        {
          path:'/menu1/addggb',
          component: addggb,
          meta: {
            title: '发布公告'
          }
        },
        {
          path:'/menu1/grggb',
          component: grggb,
          meta: {
            title: '个人公告信息处理'
          }
        },
        {
          path:'/menu1/addcfb',
          component: addcfb,
          meta: {
            title: '添加处方'
          }
        },
        {
          path:'/menu1/cfb',
          component: cfb,
          meta: {
            title: '处方信息处理'
          }
        },
        {
          path:'/menu1/huajia',
          component: huajia,
          meta: {
            title: '划价收费'
          }
        },
        {
          path:'/menu1/hjb',
          component: hjb,
          meta: {
            title: '收入信息处理'
          }
        },
        
        {
          path:'/menu1/grxinxi',
          component: grxinxi,
          meta: {
            title: '个人信息'
          }
        },
    ]
    },
    {
      path:'/menu2',
      name:'menu2',
      component: menu2,
      meta: {
        title: 'menu2'
      }, children:[
        
        {
          path:'/menu2/addbrb',
          component: addbrb,
          meta: {
            title: '添加就诊卡信息'
          }
        }, 
        {
          path:'/menu2/brb',
          component: brb,
          meta: {
            title: '病人信息处理'
          }
        },
        {
          path:'/menu2/guahao',
          component: guahao,
          meta: {
            title: '挂号'
          }
        },
        {
          path:'/menu2/ghb',
          component: ghb,
          meta: {
            title: '挂号信息处理'
          }
        },
        {
          path:'/menu2/addblb',
          component: addblb,
          meta: {
            title: '添加病历信息'
          }
        }, 
        {
          path:'/menu2/blb',
          component: blb,
          meta: {
            title: '病历信息处理'
          }
        },
    
        {
          path:'/menu2/addksb',
          component: addksb,
          meta: {
            title: '添加科室'
          }
        },
        {
          path:'/menu2/ksb',
          component: ksb,
          meta: {
            title: '科室信息处理'
          }
        },
        {
          path:'/menu2/addjcxmb',
          component: addjcxmb,
          meta: {
            title: '添加检查项目'
          }
        },
        {
          path:'/menu2/jcxmb',
          component: jcxmb,
          meta: {
            title: '检查项目信息处理'
          }
        },
        {
          path:'/menu2/jcshoufei',
          component: jcshoufei,
          meta: {
            title: '检查项目收费'
          }
        },
        
        {
          path:'/menu2/addygb',
          component: addygb,
          meta: {
            title: '添加员工'
          }
        },
        {
          path:'/menu2/ygb',
          component: ygb,
          meta: {
            title: '员工信息处理'
          }
        },
        {
          path:'/menu2/addypb',
          component: addypb,
          meta: {
            title: '添加药品'
          }
        },
        {
          path:'/menu2/ypb',
          component: ypb,
          meta: {
            title: '药品信息处理'
          }
        },
        {
          path:'/menu2/qxdj',
          component: qxdj,
          meta: {
            title: '修改权限等级'
          }
        },
        {
          path:'/menu2/ggb',
          component: ggb,
          meta: {
            title: '公告信息处理'
          }
        },
        
        {
          path:'/menu2/gonggaolan',
          component: gonggaolan,
          meta: {
            title: '公告栏'
          }
        },
        {
          path:'/menu2/addggb',
          component: addggb,
          meta: {
            title: '发布公告'
          }
        },
        {
          path:'/menu2/grggb',
          component: grggb,
          meta: {
            title: '个人公告信息处理'
          }
        },
        {
          path:'/menu2/addcfb',
          component: addcfb,
          meta: {
            title: '添加处方'
          }
        },
        {
          path:'/menu2/cfb',
          component: cfb,
          meta: {
            title: '处方信息处理'
          }
        },
        {
          path:'/menu2/huajia',
          component: huajia,
          meta: {
            title: '划价收费'
          }
        },
        {
          path:'/menu2/hjb',
          component: hjb,
          meta: {
            title: '收入信息处理'
          }
        },
        
        {
          path:'/menu2/grxinxi',
          component: grxinxi,
          meta: {
            title: '个人信息'
          }
        },
    ]
    },
    {
      path:'/menu3',
      name:'menu3',
      component: menu3,
      meta: {
        title: 'menu3'
      }, children:[
        
       
        {
          path:'/menu3/addbrb',
          component: addbrb,
          meta: {
            title: '添加就诊卡信息'
          }
        }, 
        {
          path:'/menu3/brb',
          component: brb,
          meta: {
            title: '病人信息处理'
          }
        },
        {
          path:'/menu3/guahao',
          component: guahao,
          meta: {
            title: '挂号'
          }
        },
        {
          path:'/menu3/ghb',
          component: ghb,
          meta: {
            title: '挂号信息处理'
          }
        },
        {
          path:'/menu3/addblb',
          component: addblb,
          meta: {
            title: '添加病历信息'
          }
        }, 
        {
          path:'/menu3/blb',
          component: blb,
          meta: {
            title: '病历信息处理'
          }
        },
    
        {
          path:'/menu3/addksb',
          component: addksb,
          meta: {
            title: '添加科室'
          }
        },
        {
          path:'/menu3/ksb',
          component: ksb,
          meta: {
            title: '科室信息处理'
          }
        },
        {
          path:'/menu3/addjcxmb',
          component: addjcxmb,
          meta: {
            title: '添加检查项目'
          }
        },
        {
          path:'/menu3/jcxmb',
          component: jcxmb,
          meta: {
            title: '检查项目信息处理'
          }
        },
        {
          path:'/menu3/jcshoufei',
          component: jcshoufei,
          meta: {
            title: '检查项目收费'
          }
        },
        
        {
          path:'/menu3/addygb',
          component: addygb,
          meta: {
            title: '添加员工'
          }
        },
        {
          path:'/menu3/ygb',
          component: ygb,
          meta: {
            title: '员工信息处理'
          }
        },
        {
          path:'/menu3/addypb',
          component: addypb,
          meta: {
            title: '添加药品'
          }
        },
        {
          path:'/menu3/ypb',
          component: ypb,
          meta: {
            title: '药品信息处理'
          }
        },
        {
          path:'/menu3/qxdj',
          component: qxdj,
          meta: {
            title: '修改权限等级'
          }
        },
        {
          path:'/menu3/ggb',
          component: ggb,
          meta: {
            title: '公告信息处理'
          }
        },
        
        {
          path:'/menu3/gonggaolan',
          component: gonggaolan,
          meta: {
            title: '公告栏'
          }
        },
        {
          path:'/menu3/addggb',
          component: addggb,
          meta: {
            title: '发布公告'
          }
        },
        {
          path:'/menu3/grggb',
          component: grggb,
          meta: {
            title: '个人公告信息处理'
          }
        },
        {
          path:'/menu3/addcfb',
          component: addcfb,
          meta: {
            title: '添加处方'
          }
        },
        {
          path:'/menu3/cfb',
          component: cfb,
          meta: {
            title: '处方信息处理'
          }
        },
        {
          path:'/menu3/huajia',
          component: huajia,
          meta: {
            title: '划价收费'
          }
        },
        {
          path:'/menu3/hjb',
          component: hjb,
          meta: {
            title: '收入信息处理'
          }
        },
        
        {
          path:'/menu3/grxinxi',
          component: grxinxi,
          meta: {
            title: '个人信息'
          }
        },
    ]
    },
    {
      path:'/menu4',
      name:'menu4',
      component: menu4,
      meta: {
        title: 'menu4'
      }, children:[
        {
          path:'/menu4/addbrb',
          component: addbrb,
          meta: {
            title: '添加就诊卡信息'
          }
        }, 
        {
          path:'/menu4/brb2',
          component: brb2,
          meta: {
            title: '病人信息处理'
          }
        },
        {
          path:'/menu4/guahao',
          component: guahao,
          meta: {
            title: '挂号'
          }
        },
        {
          path:'/menu4/ghb2',
          component: ghb2,
          meta: {
            title: '挂号信息处理'
          }
        },
        {
          path:'/menu4/addblb',
          component: addblb,
          meta: {
            title: '添加病历信息'
          }
        }, 
        {
          path:'/menu4/blb',
          component: blb,
          meta: {
            title: '病历信息处理'
          }
        },
    
        {
          path:'/menu4/addksb',
          component: addksb,
          meta: {
            title: '添加科室'
          }
        },
        {
          path:'/menu4/ksb2',
          component: ksb2,
          meta: {
            title: '科室信息处理'
          }
        },
        {
          path:'/menu4/addjcxmb',
          component: addjcxmb,
          meta: {
            title: '添加检查项目'
          }
        },
        {
          path:'/menu4/jcxmb2',
          component: jcxmb2,
          meta: {
            title: '检查项目信息处理'
          }
        },
        {
          path:'/menu4/jcshoufei',
          component: jcshoufei,
          meta: {
            title: '检查项目收费'
          }
        },
        
        {
          path:'/menu4/addygb',
          component: addygb,
          meta: {
            title: '添加员工'
          }
        },
        {
          path:'/menu4/ygb',
          component: ygb,
          meta: {
            title: '员工信息处理'
          }
        },
        {
          path:'/menu4/addypb',
          component: addypb,
          meta: {
            title: '添加药品'
          }
        },
        {
          path:'/menu4/ypb2',
          component: ypb2,
          meta: {
            title: '药品信息处理'
          }
        },
      
        
        {
          path:'/menu4/gonggaolan',
          component: gonggaolan,
          meta: {
            title: '公告栏'
          }
        },
        {
          path:'/menu4/addggb',
          component: addggb,
          meta: {
            title: '发布公告'
          }
        },
        {
          path:'/menu4/grggb',
          component: grggb,
          meta: {
            title: '个人公告信息处理'
          }
        },
        {
          path:'/menu4/addcfb',
          component: addcfb,
          meta: {
            title: '添加处方'
          }
        },
        {
          path:'/menu4/cfb',
          component: cfb,
          meta: {
            title: '处方信息处理'
          }
        },
        {
          path:'/menu4/huajia',
          component: huajia,
          meta: {
            title: '划价收费'
          }
        },
        {
          path:'/menu4/hjb2',
          component: hjb2,
          meta: {
            title: '收入信息处理'
          }
        },
        
        {
          path:'/menu4/grxinxi',
          component: grxinxi,
          meta: {
            title: '个人信息'
          }
        },
    ]
    },
    

  ]
})

