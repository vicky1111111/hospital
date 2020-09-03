
<!-- 购买就诊卡页面 -->
<template >
	<el-form ref="VO" :model="VO" label-width="80px"  style="margin:20px;width:90%;">
       <el-row :gutter="2">
					<el-col :span="24">
							<span style="float:left;">添加病历必填项：</span>
					</el-col>
					
					<el-col :span="12">
							<el-form-item :label="label1" prop="blbh">
							<el-input v-model="VO.blbh"></el-input>
						</el-form-item>
								<el-form-item :label="label2" prop="jzkh">
								<el-input v-model="VO.jzkh"></el-input>
								</el-form-item>
									
    			</el-col>
     <el-col :span="12">
 
      
								<el-form-item :label="label3" prop="zdrq">
											<el-date-picker
									style="width:100%;"
										v-model="VO.zdrq"
										type="date"
										placeholder="选择日期">
									</el-date-picker>
								</el-form-item>
								
										<el-form-item :label="label7" prop="cfbh">
									<el-input v-model="VO.cfbh"></el-input>
								</el-form-item>

         </el-col>
				  <el-col :span="24">
         			<span style="float:left;">填写病历信息添加病历(选填)：</span><br/>
				 </el-col>
				  <el-col :span="24">
 
							<el-form-item :label="label5" prop="zdjg">
									<el-input v-model="VO.zdjg"></el-input>
								</el-form-item>
							<el-form-item :label="label6" prop="zlff">
										<el-input v-model="VO.zlff"></el-input>
								</el-form-item>
					</el-col>
  
		<el-col :span="24">
         <span style="float:left;">上传病历图片添加病历：</span>
    </el-col>
			<el-col :span="24">
       <el-form-item label="图片">
					<el-upload
										ref="upload"
										action="http://localhost:8081/api/Blb/upload"
										name="picture"
										list-type="picture-card"
										:limit="1"
										:file-list="fileList"
										:on-exceed="onExceed"
										:before-upload="beforeUpload"
										:on-preview="handlePreview"
										:on-success="handleSuccess"
										:on-remove="handleRemove">
							<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
			</el-form-item>
					<el-form-item>
								<el-button type="primary" icon="el-icon-news"  @click="insert">录入病历信息</el-button>
								<el-button type="primary" icon="el-icon-back"  @click="tobrb">取消录入</el-button>
							</el-form-item>
    </el-col>
					
</el-row>

      
       
	</el-form>
  
</template>
<script>
import Api from '@/apis/bingli6.js'
export default {
  props: ['productData'],
  name: 'insertusers',
  components: {},
  data () {
    return {

				//文件上传的参数
				picture:'',
            dialogImageUrl: '',
            dialogVisible: false,
            //图片列表（用于在上传组件中回显图片）
            fileList: [{name: '', url: ''}],
		 label1:"病历编号",
     label2:"就诊卡号",
     label3:"诊断时间",
     label4:"员工编号",
     label5:"诊断结果",
     label6:"治疗方法",
     label7:"处方编号",
		 
     label8:"病历图片",
      VO: { 
        	blbh: '',
					jzkh: '',
					zdrq: '',
					ygbh: '',
					zdjg:'',
					zlff:'',
					cfbh:'',
						picture:'',
						
       },
    }
  },

  methods: {
		 //新增键功能
		insert(VO) {
			 let VO1 = { 	
							blbh: this.VO.blbh,
							jzkh: this.VO.jzkh,
							zdrq: this.VO.zdrq,
    						ygbh: localStorage.getItem("ygbh"),
							zdjg:this.VO.zdjg,
							zlff: this.VO.zlff,
							cfbh: this.VO.cfbh,
							picture: this.VO.picture,
                        }
							Api.insert(VO1).then(res => {

								console.log(res);

								this.tobrb();
								}).catch(err => {
										console.log(err)
								});
		},
				 //返回编辑页功能		
		tobrb() {
			 this.$router.push({
          path: `/blb`,
        })
		},
 //文件上传成功的钩子函数
        handleSuccess(res, file) {
            this.$message({
                type: 'info',
                message: '图片上传成功',
                duration: 6000
            });
            if (file.response.success) {
                this.VO.picture = file.response.message; //将返回的文件储存路径赋值picture字段
            }
        },
        //删除文件之前的钩子函数
        handleRemove(file, fileList) {
            this.$message({
                type: 'info',
                message: '已删除原有图片',
                duration: 6000
            });
        },
        //点击列表中已上传的文件事的钩子函数
        handlePreview(file) {
        },
        //上传的文件个数超出设定时触发的函数
        onExceed(files, fileList) {
            this.$message({
                type: 'info',
                message: '最多只能上传一个图片',
                duration: 6000
            });
        },
        //文件上传前的前的钩子函数
        //参数是上传的文件，若返回false，或返回Primary且被reject，则停止上传
        beforeUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isGIF = file.type === 'image/gif';
            const isPNG = file.type === 'image/png';
            const isBMP = file.type === 'image/bmp';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG && !isGIF && !isPNG && !isBMP) {
                this.$message.error('上传图片必须是JPG/GIF/PNG/BMP 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
            }
            return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
        },   


	},
	

}


</script>
