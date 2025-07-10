import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
export default function Homescreen(){
  return(
    <View style = {styles.container}>
      <Text style={styles.text}>Home</Text>
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: 'bacon' },
        }}>
        View user details
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
    
    backgroundColor :'#000'
  },
  text:{
    color:'white',
    fontSize:56,
  },
  link:{
    color:"white",
    fontSize:24,
    textDecorationLine:"underline"

  },


})