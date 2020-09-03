
<!-- 购买就诊卡页面 -->
<template >
	<el-form ref="VO" :model="VO" label-width="80px"  style="margin:20px;width:90%;">
      
       <el-form-item :label="label1" prop="ksbh">
			<el-input v-model="VO.ksbh"></el-input>
		</el-form-item>
    
        <el-form-item :label="label2" prop="ksmc">
			<el-input v-model="VO.ksmc"></el-input>
		</el-form-item>
        <el-form-item :label="label3" prop="ksdz">
			<el-input v-model="VO.ksdz" ></el-input>
		</el-form-item>
        <el-form-item :label="label4" prop="ksjj">
			<el-input v-model="VO.ksjj" ></el-input>
		</el-form-item>
    
		<el-form-item>
			 <el-button type="primary" icon="el-icon-news"  @click="insert">添加科室</el-button>
			 <el-button type="primary" icon="el-icon-back"  @click="tolist">取消添加</el-button>
		</el-form-item>
       
	</el-form>
  
</template>
<script>

import Api from '@/apis/keshi4.js'
export default {
  props: ['productData'],
  components: {},
  data () {
    return {
		 label1:"科室编号",
     label2:"科室名称",
     label3:"科室地址",
     label4:"科室简介",
      VO: { 
        	ksbh: '',
					ksmc: '',
					ksdz: '',
					ksjj: '',
       },
    }
  },

  methods: {
		 //新增键功能
		insert(VO) {
			 let VO1 = { 	
							ksbh: this.VO.ksbh,
							ksmc: this.VO.ksmc,
							ksdz: this.VO.ksdz,
							ksjj: this.VO.ksjj,

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
          path: `/ksb`,
        })
		},



	},
	

}


</script>
