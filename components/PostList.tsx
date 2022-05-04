import { useEffect, useState } from 'react';
import { Text, View} from 'react-native';
import { getPosts } from '../models/posts';
import Post from '../interfaces/post';

export default function PostList() {
    const [posts, setPosts] = useState<Post[] | any>([]);

    useEffect(async () => {
        setPosts(await getPosts());
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