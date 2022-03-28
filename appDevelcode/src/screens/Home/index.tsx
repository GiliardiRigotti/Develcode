import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { IUser } from '../../interfaces/IUser';
import { Button, Container } from './styles';


export default function Home() {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {

    }, [])
    return (
        <Container>
            <Text>CADASTRO BÁSICO USUÁRIO</Text>
        </Container>
    )
}