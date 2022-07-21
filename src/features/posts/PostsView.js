import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { fetchPosts } from './postsSlice';
import style from './post.module.css'

const PostsView = () => {

    const {isLoading, posts, error} = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])

    return (
        <div>
            <h1>PostsView</h1>
            {isLoading && <h3>Loading..</h3>}
            {error && <h3 style={{color:'red'}}>{error}</h3>}
            <section style={{
                display : 'grid',
                gridTemplateColumns : 'repeat(1,1fr)',
                gridGap : '1.5rem',
                padding: '15px'
                
            }}>
                {posts.map(post => <article className={style.rotateInDownLeft} style={{padding : '35px', backgroundColor: '#2b665e', color:'white'}}key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </article>)}
            </section>

        </div>
    );
};

export default PostsView;