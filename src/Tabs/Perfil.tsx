import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil(){
    return(
       <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu perfil</Titulo>

                <Avatar 
                size="xl"
                source={{ uri: "https://github.com/basedCaesar.png"}}
                mt={5}
                />

                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Nathan Vasconcellos da Silva</Titulo>
                <Text>31/05/2002</Text>
                <Text>São Paulo</Text>

                <Divider mt={5}/>

                <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
       </ScrollView>
    )
}