import React from 'react';

const profileData = {
  velopert: {
    name: '김민준',
    des: 'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자',
  },
  gildong: {
    name: '홍길동',
    des: '전래동화의 주인공',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>경고! 존재하지 않는 유저! </div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.des}</p>
    </div>
  );
};

export default Profile;
