# vuetemplatetocssclass

### 使用说明
- 打开一个vue文件
- `shift+ctrl+p` 打开命令行, 输入 `自动生成vue的class：generateCss`, 自动生成class;
- 右键,点击`自动生成vue的class：generateCss`, 自动生成class;

![Command](/img/command.jpg)
![Command](/img/right.jpg)
![Command](/img/result.jpg)

### Example
```vue
<template>
  <div class="aaaa">
    <div class="bbbb">
      <div class="ccc"></div>
      <div class="ccc">
        <div class="eeeee"></div>
      </div>
    </div>
    <div class="bbbb"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>
```

#### Auto Generate Style Element
``` vue
<template>
  <div class="aaaa">
    <div class="bbbb">
      <div class="ccc"></div>
      <div class="ccc">
        <div class="eeeee"></div>
      </div>
    </div>
    <div class="bbbb"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>
<style lang="scss" scoped>
.aaaa{
	.bbbb{
		.ccc{
		}
		.ccc{
			.eeeee{
			}
		}
	}
	.bbbb{
	}
}
</style>
```


**Enjoy!**
