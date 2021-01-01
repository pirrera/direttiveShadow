<template>
  <Page>
    <ActionBar title="Direttive in NativeScript-Vue: ESEMPI" />

        <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false" v-swipe>
          <StackLayout orientation="horizontal" class="content-wrapper" >

            <ContentView class="card"  v-shadow>
              <GridLayout rows="auto, auto" columns="auto">
              <Label text="SWIPE" textWrap="true" row="0" col="0" backgroundColor="yellow" fontSize="70" />
              <Image src="~/assets/images/a.png" stretch="aspectFit" height="500"  row="1" col="0" />
              </GridLayout>
            </ContentView>

            <ContentView class="card" v-doubleTap v-shadow>
              <GridLayout rows="auto,auto, auto" columns="auto">
                <!-- Aggiunta di un bottone e di un  Label -->
                <Label text="Touch" textWrap="true" row="0" col="0" backgroundColor="yellow" fontSize="70" />
                <Button text="Pagina2" tap="" row="1" col="0" height="50" />
                <Image src="~/assets/images/b.png" stretch="aspectFit" height="500" row="2" col="0" />
              </GridLayout>
            </ContentView>

            <ContentView ref="vado" class="card"  v-touchScale v-shadow>
              <Image src="~/assets/images/c.png" stretch="aspectFit" height="500" />
            </ContentView>
            
          </StackLayout>
        </ScrollView>
    
  </Page>
</template>

<script >

export default {

  data() {
    return {
      
    };
  },
  methods: {
   
  },
 
};
</script>

<style scoped lang="scss">

Page {
    background-color: rgb(178, 211, 240);
}
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
.card{
  margin: 10;
  background-color: white;
}
.content-wrapper{
  background-color: rgb(178, 211, 240);
  margin: 20 0 20 0;
  padding: 20 0 20 0;
}
</style>
