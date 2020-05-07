<template>
  <!-- <div id="app">
    <div class="pg_header"></div>
    <div class="pg_content">
      <div class="menu">
        <ul id="nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
      <div class="content"></div>
    </div>
    <div class="pg_footer"></div>
    <router-view />
  </div>-->

  <el-container id="app">
    <el-header>Header</el-header>
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <!-- <el-menu router :default-active="$route.path">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="/">选项1</el-menu-item>
                  <el-menu-item index="About">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="/teaching">
                <i class="el-icon-menu"></i>
                <span slot="title">排课</span>
              </el-menu-item>
              <el-menu-item index="/teaching/Teacher">
                <i class="el-icon-menu"></i>
                <span slot="title">教师</span>
              </el-menu-item>
              <el-menu-item index="/About">
                <i class="el-icon-document"></i>
                <span slot="title">描述页</span>
              </el-menu-item>
              <el-menu-item index="/">
                <i class="el-icon-setting"></i>
                <span slot="title">首页</span>
              </el-menu-item> @click="$router.push({ path: item.path+'/'+itemChild.path })"
            </el-menu>-->

            <el-menu unique-opened :default-active="$route.path" class="my-menu" router>
              <template v-for="(item , index) in $router.options.routes">
                <template v-if="item.meta.menuShow">
                  <el-submenu
                    index="1"
                    :key="index"
                    v-if="item.children && item.children.length > 0"
                  >
                    <template slot="title">{{item.meta.menuName}}</template>
                    <el-menu-item
                      v-for="(itemChild , jndex) in item.children"
                      :index="item.path+'/'+itemChild.path"
                      :key="jndex"
                    >
                      <template v-if="item.meta.menuShow">
                        <span>{{itemChild.meta.menuName}}</span>
                      </template>
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item v-else :key="index" :index="item.path">{{item.meta.menuName}}</el-menu-item>
                </template>
              </template>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container id="main-content">
        <el-main>
          <router-view />
        </el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #b2c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  position: fixed;
  top: 60px;
  height: 100%;
  background-color: #ffffff;
  color: #333;
  width: 300px;
  line-height: 60px;
}

#main-content {
  position: absolute;
  top: 60px;
  left: 300px;
  right: 0;
  bottom: 0;
  overflow: auto;
  display: block;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: calc(100vh - 120px);
}
.el-footer {
  background-color: #b2c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>


