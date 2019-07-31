<template>
    <div>
        <input type="text">
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
     mounted() {
        axios.get("ajax/bservice/HouseSaleSearchFilter/getHouseList?src=webapp&country_unique_name=uk&type_id=24")
        .then((result) => {
           console.log(result)
          
        })


    },
}
</script>
