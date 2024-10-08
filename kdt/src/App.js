import PhotoList from "./PhotoList.js"

const DUMMY_DATA = [
    [
        {
            id: 1,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20200428_052455.jpg",
            cats: "1, 2",
            created_at: "2021-08-22T12:13:26.364Z",
            updated_at: "2021-08-22T12:26:50.467Z",
            photo_in_cats: [
                {
                    id: 1,
                    name: "나나",
                    colors: "yellow, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201217_012751.jpg",
                    published_at: "2021-08-22T12:09:21.753Z",
                    created_at: "2021-08-22T12:09:20.857Z",
                    updated_at: "2021-08-22T12:11:16.963Z"
                },
                {
                    id: 3,
                    name: "모나",
                    colors: "black, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075630.jpg",
                    published_at: "2021-08-22T12:09:49.615Z",
                    created_at: "2021-08-22T12:09:48.793Z",
                    updated_at: "2021-08-22T12:12:14.809Z"
                }
            ]
        },
        {
            id: 2,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201125_124829.jpg",
            cats: "3",
            created_at: "2021-08-22T12:13:49.601Z",
            updated_at: "2021-08-22T12:15:54.509Z",
            photo_in_cats: [
                {
                    id: 3,
                    name: "모나",
                    colors: "black, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075630.jpg",
                    published_at: "2021-08-22T12:09:49.615Z",
                    created_at: "2021-08-22T12:09:48.793Z",
                    updated_at: "2021-08-22T12:12:14.809Z"
                }
            ]
        },
        {
            id: 3,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201209_135222.jpg",
            cats: "4",
            created_at: "2021-08-22T12:13:57.756Z",
            updated_at: "2021-08-22T12:15:59.167Z",
            photo_in_cats: [
                {
                    id: 4,
                    name: "레이",
                    colors: "gray, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210814_144059.jpg",
                    published_at: "2021-08-22T12:10:09.320Z",
                    created_at: "2021-08-22T12:10:08.334Z",
                    updated_at: "2021-08-22T12:11:39.119Z"
                }
            ]
        },
        {
            id: 4,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201217_012751.jpg",
            cats: "1",
            created_at: "2021-08-22T12:14:07.188Z",
            updated_at: "2021-08-22T12:16:03.066Z",
            photo_in_cats: [
                {
                    id: 1,
                    name: "나나",
                    colors: "yellow, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201217_012751.jpg",
                    published_at: "2021-08-22T12:09:21.753Z",
                    created_at: "2021-08-22T12:09:20.857Z",
                    updated_at: "2021-08-22T12:11:16.963Z"
                }
            ]
        },
        {
            id: 5,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210313_163131.jpg",
            cats: null,
            created_at: "2021-08-22T12:16:31.440Z",
            updated_at: "2021-08-22T12:16:31.449Z",
            photo_in_cats: [
                {
                    id: 2,
                    name: "차이",
                    colors: "white, brown, black",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210313_163131.jpg",
                    published_at: "2021-08-22T12:09:36.820Z",
                    created_at: "2021-08-22T12:09:35.882Z",
                    updated_at: "2021-08-22T12:12:38.734Z"
                }
            ]
        },
        {
            id: 6,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210402_045232.jpg",
            cats: null,
            created_at: "2021-08-22T12:16:39.187Z",
            updated_at: "2021-08-22T12:16:39.195Z",
            photo_in_cats: [
                {
                    id: 3,
                    name: "모나",
                    colors: "black, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075630.jpg",
                    published_at: "2021-08-22T12:09:49.615Z",
                    created_at: "2021-08-22T12:09:48.793Z",
                    updated_at: "2021-08-22T12:12:14.809Z"
                }
            ]
        },
        {
            id: 7,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210614_144918.jpg",
            cats: null,
            created_at: "2021-08-22T12:16:48.849Z",
            updated_at: "2021-08-22T12:16:48.857Z",
            photo_in_cats: [
                {
                    id: 1,
                    name: "나나",
                    colors: "yellow, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201217_012751.jpg",
                    published_at: "2021-08-22T12:09:21.753Z",
                    created_at: "2021-08-22T12:09:20.857Z",
                    updated_at: "2021-08-22T12:11:16.963Z"
                }
            ]
        },
        {
            id: 8,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210620_052233.jpg",
            cats: null,
            created_at: "2021-08-22T12:16:58.775Z",
            updated_at: "2021-08-22T12:16:58.783Z",
            photo_in_cats: [
                {
                    id: 1,
                    name: "나나",
                    colors: "yellow, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201217_012751.jpg",
                    published_at: "2021-08-22T12:09:21.753Z",
                    created_at: "2021-08-22T12:09:20.857Z",
                    updated_at: "2021-08-22T12:11:16.963Z"
                }
            ]
        },
        {
            id: 9,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210629_220618.jpg",
            cats: null,
            created_at: "2021-08-22T12:17:13.005Z",
            updated_at: "2021-08-22T12:17:13.015Z",
            photo_in_cats: [
                {
                    id: 1,
                    name: "나나",
                    colors: "yellow, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201217_012751.jpg",
                    published_at: "2021-08-22T12:09:21.753Z",
                    created_at: "2021-08-22T12:09:20.857Z",
                    updated_at: "2021-08-22T12:11:16.963Z"
                },
                {
                    id: 3,
                    name: "모나",
                    colors: "black, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075630.jpg",
                    published_at: "2021-08-22T12:09:49.615Z",
                    created_at: "2021-08-22T12:09:48.793Z",
                    updated_at: "2021-08-22T12:12:14.809Z"
                },
                {
                    id: 2,
                    name: "차이",
                    colors: "white, brown, black",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210313_163131.jpg",
                    published_at: "2021-08-22T12:09:36.820Z",
                    created_at: "2021-08-22T12:09:35.882Z",
                    updated_at: "2021-08-22T12:12:38.734Z"
                }
            ]
        },
        {
            id: 10,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210803_224457.jpg",
            cats: null,
            created_at: "2021-08-22T12:17:25.391Z",
            updated_at: "2021-08-22T12:17:25.401Z",
            photo_in_cats: [
                {
                    id: 1,
                    name: "나나",
                    colors: "yellow, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201217_012751.jpg",
                    published_at: "2021-08-22T12:09:21.753Z",
                    created_at: "2021-08-22T12:09:20.857Z",
                    updated_at: "2021-08-22T12:11:16.963Z"
                },
                {
                    id: 3,
                    name: "모나",
                    colors: "black, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075630.jpg",
                    published_at: "2021-08-22T12:09:49.615Z",
                    created_at: "2021-08-22T12:09:48.793Z",
                    updated_at: "2021-08-22T12:12:14.809Z"
                },
                {
                    id: 4,
                    name: "레이",
                    colors: "gray, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210814_144059.jpg",
                    published_at: "2021-08-22T12:10:09.320Z",
                    created_at: "2021-08-22T12:10:08.334Z",
                    updated_at: "2021-08-22T12:11:39.119Z"
                }
            ]
        },
        {
            id: 11,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210814_144059.jpg",
            cats: null,
            created_at: "2021-08-22T12:17:34.859Z",
            updated_at: "2021-08-22T12:17:34.867Z",
            photo_in_cats: [
                {
                    id: 4,
                    name: "레이",
                    colors: "gray, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210814_144059.jpg",
                    published_at: "2021-08-22T12:10:09.320Z",
                    created_at: "2021-08-22T12:10:08.334Z",
                    updated_at: "2021-08-22T12:11:39.119Z"
                }
            ]
        },
        {
            id: 12,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210817_165808.jpg",
            cats: null,
            created_at: "2021-08-22T12:17:43.858Z",
            updated_at: "2021-08-22T12:17:43.866Z",
            photo_in_cats: [
                {
                    id: 1,
                    name: "나나",
                    colors: "yellow, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20201217_012751.jpg",
                    published_at: "2021-08-22T12:09:21.753Z",
                    created_at: "2021-08-22T12:09:20.857Z",
                    updated_at: "2021-08-22T12:11:16.963Z"
                },
                {
                    id: 4,
                    name: "레이",
                    colors: "gray, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210814_144059.jpg",
                    published_at: "2021-08-22T12:10:09.320Z",
                    created_at: "2021-08-22T12:10:08.334Z",
                    updated_at: "2021-08-22T12:11:39.119Z"
                }
            ]
        },
        {
            id: 13,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075630.jpg",
            cats: null,
            created_at: "2021-08-22T12:17:51.626Z",
            updated_at: "2021-08-22T12:17:51.642Z",
            photo_in_cats: [
                {
                    id: 3,
                    name: "모나",
                    colors: "black, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075630.jpg",
                    published_at: "2021-08-22T12:09:49.615Z",
                    created_at: "2021-08-22T12:09:48.793Z",
                    updated_at: "2021-08-22T12:12:14.809Z"
                }
            ]
        },
        {
            id: 14,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075644.jpg",
            cats: null,
            created_at: "2021-08-22T12:17:59.913Z",
            updated_at: "2021-08-22T12:17:59.923Z",
            photo_in_cats: [
                {
                    id: 3,
                    name: "모나",
                    colors: "black, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210821_075630.jpg",
                    published_at: "2021-08-22T12:09:49.615Z",
                    created_at: "2021-08-22T12:09:48.793Z",
                    updated_at: "2021-08-22T12:12:14.809Z"
                }
            ]
        },
        {
            id: 15,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210822_012538.jpg",
            cats: null,
            created_at: "2021-08-22T12:18:10.511Z",
            updated_at: "2021-08-22T12:18:10.519Z",
            photo_in_cats: [
                {
                    id: 4,
                    name: "레이",
                    colors: "gray, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210814_144059.jpg",
                    published_at: "2021-08-22T12:10:09.320Z",
                    created_at: "2021-08-22T12:10:08.334Z",
                    updated_at: "2021-08-22T12:11:39.119Z"
                }
            ]
        },
        {
            id: 16,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210822_054127.jpg",
            cats: null,
            created_at: "2021-08-22T12:18:19.708Z",
            updated_at: "2021-08-22T12:18:19.717Z",
            photo_in_cats: [
                {
                    id: 2,
                    name: "차이",
                    colors: "white, brown, black",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210313_163131.jpg",
                    published_at: "2021-08-22T12:09:36.820Z",
                    created_at: "2021-08-22T12:09:35.882Z",
                    updated_at: "2021-08-22T12:12:38.734Z"
                }
            ]
        },
        {
            id: 17,
            imagePath:
                "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210822_093743.jpg",
            cats: null,
            created_at: "2021-08-22T12:18:29.630Z",
            updated_at: "2021-08-22T12:18:29.637Z",
            photo_in_cats: [
                {
                    id: 4,
                    name: "레이",
                    colors: "gray, white",
                    birthday: null,
                    profileImage:
                        "https://misc-api-static.s3.ap-northeast-2.amazonaws.com/cat-photos/20210814_144059.jpg",
                    published_at: "2021-08-22T12:10:09.320Z",
                    created_at: "2021-08-22T12:10:08.334Z",
                    updated_at: "2021-08-22T12:11:39.119Z"
                }
            ]
        }
    ]
]

export default function App({ $target }) {
    const $h1 = document.createElement("h1")
    $h1.innerText = "Cat Photos"
    $target.appendChild($h1)
    const photoListComponent = new PhotoList({
        $target,
        initialState: DUMMY_DATA
    })
}
