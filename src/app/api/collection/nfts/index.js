export default function handler(req, res) {
    const { listID } = req.query
    res.status(200).json({ name: 'John Doe' })
}