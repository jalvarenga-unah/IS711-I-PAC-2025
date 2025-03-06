

export const sendResponse = (res, status, data, message, error) => {
    res.status(status).json({
        success: status >= 200 && status < 300,
        data,
        message,
        error: error
    })
}