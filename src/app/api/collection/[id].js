

export default function handler(req, res) {
    const { id } = req.params

    res.status(200).json({ name: 'John Doe' })
}