

const games = [
  {
    "created_at": "2024-12-29T17:15:13.213000",
    "description": "This is a snake game",
    "downvote": 0,
    "game_engine": "Godot",
    "id": "677183a36dc64b49188d9f41",
    "played_count": 0,
    "tags": [
      "Test"
    ],
    "thumbnail": "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uyZVAtpR9u7dmw4dOmTL8oFsPzmhiUtKGkfeLpo8vNR2OimxZ8+e9Ndff9mY62gHqBLDjqArhIecju7a+NVd1XiOuqsnT560ZeJH/rFo/EdnZLUT6UTFWDsTaqu63b777rv0/fffp9bWVqvaNUyhgBuvbSNjCy2AH8H16peMaPymu7s79fT02HuN8UheIYzGu0mqHDQOpFeqvfpTm6ntdNDRpPkjR46kY8eOWRup3RVyHnbjtXFEBF1w+QatjV+D0wqmL7/8Mh04cGBkyc0zrpj+1LaaFGY6KH311Vfpt99+s8pbwxT5QamksCPoCuBHcAWdNnh1Zbyy0zLtAOPxak90serHH3+cdu3aZdP7779vl6Q4urGNIW8zDTGozdXO2gZE7V4StsrgPOT0qo1f3ZjTp09XjuZ6vV3XU+Ny7u23305vvPFGevnll21677337IJVd7vQRG3k31zxNlc76wCnNvdtohQEXWAeZtrAVWmp26qzq9u3b7dvPThfbyz58ocffthetZO8+eabNq8BbzSW/OCly00+++wzu3xIFb0v88ArAUEXlDZgP2L7ILW6L3l1Npnqy6+127Jli1V04l85QmNR+/s2oKpOByTdgUZBl28fJSDogso3YgWa3utyksl8GT//W7ogVXTpwjvvvGPz2onQePJqTduAbvGkExS+PZQUdnwFLDBtyDp667o3XRLy888/p7///ntk6cSpGvTuTltbW9q0aZN1gUQXpuqaLV/uOxAaj8Zo9RWxDRs2WHsp+EoZUyXoAlPgqNu6dOlSu/uIvqhPIJVHYeZnWx988MH03HPPWWWvg19+djYyuq6FULD5pR+ldFdwU35AK/XyH4KuAL6hezdF7ydbzelv6DuyOqnhrwTn9OFBV1o1T9AVwIMov1h0suGkv6GzrBrU9tfSdprpTEMXd9P+0xVBVyjCCSUh6ACER9ABCI+gK1RpYzQoG0FXAB+Py8+4TXaMTmddde1VPhGa04fa6m7af7oi6ArgQZRfLDzZcNJZV927Lp9K22mmM7XV3bT/dEXQFSI/ihNMZclDLd8OSkLQBaeN3L/In98g80429vxqet0BY/PmzemZZ56xaf369SNLbiqtUpgO/PpJ0U04tT349XSl4LuuwSnQtFHrWwy6H51un75v3z5bpgDz7ux49AV+v0PJBx98kN59912bd4899ljltuwas+O27I1DYaZtQO3f2dlpj0AcGBiohFwpYUdFF5RXbNqQdUTXq+5Fpme5usls5B0dHfb61ltvpU8++cTmdXcUNJ68fbUNNDc328FO89o+tPxOKvvpjKALKt+I/e4Vup12fu+4vEszUStWrLBXPTfiww8/tHm/ZRMai9o/3wZ0V2ndOFWVfEkhJwRdAbyLqhtvakxND7jJb39+u8ouX+4PutZOots+SX5bdjSGfFxV95977bXXrKLTgc6XqV1v1/ZREHSB+VHbX/UFfG3sunmm38lE8p1iNPmYm7qrutGmAu/w4cPpo48+uuVmnhMZ88PUy9tXQxbe5mpLD7iSKjpORgTnG7M2bJ1t00avo/oXX3xhD6D2ZSVt9CXwKl5U0emu0LqjsO44408CE7V9Cajogss3ZB3RFXL62Ysvvli5NEQbvc6WYvpTwHnIqU23bt1qQaeDmsZk80qvlJATgq4AvkHr1a+pW7VqlQWdj9V59/R23VjdaFNnWXU9liadiLjd72DqqW094LySa29vtzZuaWmpfINF6/lrSei6FiLfyEVHd+0Asnv37nTq1Cmb1xF/MmdjUX952z399NP2IBxdM6eQUwh6uJUYdByKC+IbuCYd9TVeo51D4zcPPfSQreM7itbRMp+o2hpHdbt4aKntdGGw2lMPwVHAqYLPg63EkBO23kLkG7poh9DgdG9vb1q5cuUtjzDUq9bTjuOTd4dQf9XtosDzB5Mr4NSW+llPT4+1u598KDXkhK5rYTzotMH7vAatNa8TFerO6jF4u3btqozb5ajs6mu0A46q8S1btlSe4aEDlSo5BaG3V8khJwRdofINX4Gmo752EA+6X375JfX19dmJB31tTGM9J06csPVRP6rc1qxZYwcnfctBwbdu3To76aB5tZMqdSq5WxF0hdLGL74D6L12FFUB2kF0RlXdH9GZ2e7u7rRz5057j/q577770quvvmrfWR0cHLS20jdeFG5qQx+3k+o2LhlBV7B8R/B5veq9P69V71U9qFukr3rpvVcKqA1vB1XeCji/JMi7pn7SQbSuJvG2BEFXvHxn8Hm9aifSq6jS08kLfatCFcNo40SYego1VW5DQ0PWBnqvNtKrV995GxJy/yHoUOHBNtoOomW+HPWjthkrwAi3sXEKDRXVOxHh1njy9qhuH0JubFR0GJd2JHagxkO73BkqOoyLnakx0S53hqADEB5BByA8gg5AeAQdgPAIOgDhEXQAwiPoAIRH0AEIj6ADEB5BByA8gg5AeAQdgPAIOgDhEXQAwiPoAIRH0AEIj6ADEB5BByA8gg5AeAQdgPAIOgDhEXQAwiPoAIRH0AEIj6ADEB5BByA8gg5AeAQdgPAIOgDhEXQAwiPoAIRH0AEIj6ADEB5BByA8gg5AeAQdgPAIOgDhEXQAgkvpXyUkUj0facRXAAAAAElFTkSuQmCC",
    "title": "Snake game",
    "upvote": 0
  }
]
const gameDetail = {
  "change_logs": [
    {
      "log": "default major features",
      "version": "1.0.0"
    },
    {
      "log": "next default major features",
      "version": "1.0.1"
    }
  ],
  "comments": [
    {
      "content": "this is a great game",
      "created_at": "2025-01-03T07:21:24.794000",
      "downvote": 0,
      "downvote_list": [],
      "parent_id": null,
      "removed_at": null,
      "nickname": 'huhing guy',
      "email": 'huh@gmail.com',
      "sub_thread_count": 0,
      "updated_at": "2025-01-03T07:21:24.794000",
      "upvote": 0,
      "upvote_list": []
    },
    {
      "content": "this is a great game",
      "created_at": "2025-01-03T07:21:24.794000",
      "downvote": 0,
      "downvote_list": [],
      "parent_id": null,
      "removed_at": null,
      "nickname": 'huhing guy',
      "email": 'huh@gmail.com',
      "sub_thread_count": 0,
      "updated_at": "2025-01-03T07:21:24.794000",
      "upvote": 0,
      "upvote_list": []
    },
    {
      "content": "this is a great game",
      "created_at": "2025-01-03T07:21:24.794000",
      "downvote": 0,
      "downvote_list": [],
      "parent_id": null,
      "removed_at": null,
      "nickname": 'huhing guy',
      "email": 'huh@gmail.com',
      "sub_thread_count": 0,
      "updated_at": "2025-01-03T07:21:24.794000",
      "upvote": 0,
      "upvote_list": []
    },
    {
      "content": "this is a great game",
      "created_at": "2025-01-03T07:21:24.794000",
      "downvote": 0,
      "downvote_list": [],
      "parent_id": null,
      "removed_at": null,
      "nickname": 'huhing guy',
      "email": 'huh@gmail.com',
      "sub_thread_count": 0,
      "updated_at": "2025-01-03T07:21:24.794000",
      "upvote": 0,
      "upvote_list": []
    },
    {
      "content": "this is a great game",
      "created_at": "2025-01-03T07:21:24.794000",
      "downvote": 0,
      "downvote_list": [],
      "parent_id": null,
      "removed_at": null,
      "nickname": 'huhing guy',
      "email": 'huh@gmail.com',
      "sub_thread_count": 0,
      "updated_at": "2025-01-03T07:21:24.794000",
      "upvote": 0,
      "upvote_list": []
    },
    {
      "content": "this is a great game",
      "created_at": "2025-01-03T07:21:24.794000",
      "downvote": 0,
      "downvote_list": [],
      "parent_id": null,
      "removed_at": null,
      "nickname": 'huhing guy',
      "email": 'huh@gmail.com',
      "sub_thread_count": 0,
      "updated_at": "2025-01-03T07:21:24.794000",
      "upvote": 0,
      "upvote_list": []
    }
  ],
  "created_at": "2024-12-29T17:15:13.213000",
  "description": "This is a snake game",
  "downvote": 0,
  "downvote_list": [],
  "embedded_link": null,
  "game_content": null,
  "game_engine": "Godot",
  "id": "677183a36dc64b49188d9f41",
  "played_count": 0,
  "tags": [
    "Test"
  ],
  "title": "Snake game",
  "upvote": 0,
  "upvote_list": []
}
async function getMockGameDetail() {

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(gameDetail)
      resolve(gameDetail)
    }, 1000)
  })
}

async function getMockGames() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(games)
    }, 100)
  })
}

async function getGamePath() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('https://itch.io/embed-upload/12350739')
    }, 100)
  })
}

export { getMockGames, getMockGameDetail, getGamePath }