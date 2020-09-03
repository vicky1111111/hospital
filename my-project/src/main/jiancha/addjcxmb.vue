
<!-- 购买就诊卡页面 -->
<template >
	<el-form ref="VO" :model="VO" label-width="80px"  style="margin:20px;width:90%;">
      
       <el-form-item :label="label1" prop="xmbh">
			<el-input v-model="VO.xmbh"></el-input>
		</el-form-item>
    
        <el-form-item :label="label2" prop="xmmc">
			<el-input v-model="VO.xmmc"></el-input>
		</el-form-item>
        <el-form-item :label="label3" prop="xmfy">
			<el-input v-model="VO.xmfy" ></el-input>
		</el-form-item>
        <el-form-item :label="label4" prop="xmms">
			<el-input v-model="VO.xmms" ></el-input>
		</el-form-item>
    
		<el-form-item>
			 <el-button type="primary" icon="el-icon-news"  @click="insert">添加检查项目</el-button>
			 <el-button type="primary" icon="el-icon-back"  @click="tolist">取消添加项目</el-button>
		</el-form-item>
       
	</el-form>
  
</template>
<script>

import Api from '@/apis/jiancha2.js'
export default {
  props: ['productData'],
  components: {},
  data () {
    return {
		 label1:"项目编号",
     label2:"项目名称",
     label3:"项目费用",
     label4:"项目描述",
      VO: { 
        	xmbh: '',
					xmmc: '',
					xmfy: '',
					xmms: '',
       },
    }
  },

  methods: {
		 //新增键功能
		insert(VO) {
			 let VO1 = { 	
							xmbh: this.VO.xmbh,
							xmmc: this.VO.xmmc,
							xmfy: this.VO.xmfy,
							xmms: this.VO.xmms,

                        }
							Api.insert(VO1).then(res => {

								console.log(res);

								this.tolist();
								}).catch(err => {
										console.log(err)
								});
		},
				 //返回编辑页功能		
		tolist() {
			 this.$router.push({
          path: `/jcxmb`,
        })
		},



	},
	

}


</script>
