
<!-- 购买就诊卡页面 -->
<template >
	<el-form ref="VO" :model="VO" label-width="80px"  style="margin:20px;width:90%;">
      
       <el-form-item :label="label1" prop="ggbh">
			<el-input v-model="VO.ggbh"></el-input>
		</el-form-item>
    
        <el-form-item :label="label2" prop="ggbt">
			<el-input v-model="VO.ggbt"></el-input>
		</el-form-item>
        <el-form-item :label="label4" prop="ggnr">
			<el-input
				type="textarea"
				:autosize="{ minRows: 2, maxRows: 10}"
				placeholder="请输入内容"
				v-model="VO.ggnr">
			</el-input>
		</el-form-item>
    
		<el-form-item>
			 <el-button type="primary" icon="el-icon-news"  @click="insert">发布公告</el-button>
			 <el-button type="primary" icon="el-icon-back"  @click="tolist">取消发布</el-button>
		</el-form-item>
       
	</el-form>
  
</template>
<script>
import Api from '@/apis/gonggao.js'
export default {
  props: ['productData'],
  components: {},
  data () {
    return {
    label1:"公告编号",
     label2:"公告标题",
     label3:"员工编号",
     label4:"公告内容",
      VO: { 
        	ggbh: '',
					ggbt: '',
					ygbh: '',
					ggnr: '',
       },
    }
  },

  methods: {
		 //新增键功能
		insert(VO) {
			 let VO1 = { 	
							ggbh: this.VO.ggbh,
							ggbt: this.VO.ggbt,
              ygbh: localStorage.getItem("ygbh"),
							ggnr: this.VO.ggnr,

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
          path: `/grggb`,
        })
		},



	},
	

}


</script>
