// 3- Implement View other profiles

"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();

            setUserPosts(data);
        };

        if(params?.id) fetchPosts();
    }, [params.id]);

    return (
        <Profile 
          name={userName}
          desc={`Welcome tp ${userName}'s personalized profile page. Explore ${userName}'s excptional prompts and be inspired by the power of their imagination`}
          data={userPosts}
        />
    );

};