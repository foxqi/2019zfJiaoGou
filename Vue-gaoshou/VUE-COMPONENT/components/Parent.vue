<template>
    <div>
       父组件钱数 :{{mny}}
    </div>
</template>

<script>
import Son1 from './Son1'
export default {
    data(){
       return {mny : 100} 
    }
}

</script>