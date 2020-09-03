
<template >
	<el-form ref="VO" :model="VO" label-width="80px"  style="margin:20px;width:90%;">
       <el-row :gutter="10">
  <el-col :span="12">
 			 <el-form-item :label="label1" prop="ypbh">
						<el-input v-model="VO.ypbh"></el-input>
				</el-form-item>
				<el-form-item :label="label2" prop="ypmc">
						<el-input v-model="VO.ypmc"></el-input>
				</el-form-item>
			
					<el-form-item :label="label3" prop="ypgn">
							<el-input v-model="VO.ypgn" ></el-input>
					</el-form-item>
					<el-form-item :label="label4" prop="ypjg">
						<el-input v-model="VO.ypjg" ></el-input>
				</el-form-item>
				
					
    </el-col>
     <el-col :span="12">
			 	<el-form-item :label="label5" prop="ypkc">
						<el-input v-model="VO.ypkc"></el-input>
					</el-form-item>
			 <el-form-item :label="label6" prop="scdw">
								<el-input v-model="VO.scdw"></el-input>
					</el-form-item>
			 	 <el-form-item :label="label7" prop="scrq">
						  <el-date-picker
         style="width:100%;"
          v-model="VO.scrq"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
					
				</el-form-item>
				<el-form-item :label="label8" prop="gqrq">
					<el-date-picker
         style="width:100%;"
          v-model="VO.gqrq"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
				</el-form-item>
    </el-col>
</el-row>

		<el-form-item>
			 <el-button type="primary" icon="el-icon-news"  @click="insert">添加药品</el-button>
			 <el-button type="primary" icon="el-icon-back"  @click="tolist">取消添加</el-button>
			  <el-button type="primary" icon="el-icon-news"  @click="addlist">选择扫码添加药品</el-button>
	
		</el-form-item>
       
	</el-form>
  
</template>
<script>

import Api from '@/apis/yaopin5.js'
export default {
  props: ['productData'],
  components: {},
  data () {
    return {
		 label1:"药品编号",
     label2:"药品名称",
     label3:"药品功能",
     label4:"药品价格",
     label5:"药品库存",
     label6:"生产单位",
		 label7:"生产日期",
		 label8:"过期日期",
      VO: { 
        	ypbh: '',
					ypmc: '',
					ypgn: '',
					ypjg: '',

					ypkc:'',
					scdw:'',
					scrq:'',
					gqrq: '',

       },
    }
  },

  methods: {
		 //新增键功能
		insert(VO) {
			 let VO1 = { 	
							ypbh: this.VO.ypbh,
							ypmc: this.VO.ypmc,
							ypgn: this.VO.ypgn,
							ypjg: this.VO.ypjg,

							ypkc:this.VO.ypkc,
							scdw: this.VO.scdw,
							scrq: this.VO.scrq,
							gqrq: this.VO.gqrq,


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
          path: `/ypb`,
        })
		},
addlist(){
							Api.addlist().then(res => {
								console.log(res);
								this.tolist();
								}).catch(err => {
										console.log(err)
								});
		},


	},
	

}


</script>
