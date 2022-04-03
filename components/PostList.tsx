import { useEffect, useState } from 'react';
import { Text, View} from 'react-native';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://ladda.emilfolino.se")
        .then(response => response.json())
        .then(result => setPosts(result.data));
    }, []);

    const listOfPosts = posts.map((post, index) => {
        return <Text key={index} style={{fontSize: 32, marginBottom: 32}}>{post.identifier}:{post.name}</Text>
    })

    return (
        <View>
            {listOfPosts}
        </View>
    );
  } 