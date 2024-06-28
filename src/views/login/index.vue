<template>
    <div class="login-container">
        <van-nav-bar 
            class="app-nav-bar"
            title="Log In" 
            left-arrow
            @click-left="$router.back()"
        />

        <van-cell-group>
            <van-field
                v-model="user.mobile"
                left-icon="phone"
                placeholder="Mobile"
                input-align="left"
                center
            />
            <van-field
                v-model="user.code"
                left-icon="lock"
                placeholder="Verification Code"
                input-align="left"
                center
            >
                <template #button>
                    <van-button class="send-btn" size="small" round >Send Code</van-button>
                </template> 
            </van-field>
        </van-cell-group>

        <div class="login-btn-wrap">
            <van-button class="login-btn" type="primary" block>Login</van-button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LoginIndex', 
    components: {},
    data() {
        return {
            user: {
                mobile: '',
                code: ''
            }
        }
    },
}
</script>

<style scoped lang="less">
    .login-container {
    
        .login-btn-wrap {
            padding: 26px 16px;

            .login-btn {
                background-color: #6db4fb;
                border: none;

                // .van-button__content {
                //     font-size: 100px !important;
                // }
                
            }
        }

        .send-btn {
            width: 76px;
            height: 23px;
            background-color: #ededed;
            
            .van-button__content { // 不起作用 
                font-size: 11px;
                // color: #666;
                color: red !important;
            }
        }
    }
</style>