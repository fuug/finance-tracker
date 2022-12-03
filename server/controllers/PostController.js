class PostController {
    get(req, res) {
        res.send(
            [
                {
                    id: 1,
                    title: "Foo",
                    text: "Bar",
                    is_draft: false,
                    author_id: 1
                },
                {
                    id: 2,
                    title: "Foo 2",
                    text: "BarBarBzz",
                    is_draft: false,
                    author_id: 1
                }
            ]
        )
    }

    create(req, res) {
        res.send(req.body)
    }
}

export default new PostController()