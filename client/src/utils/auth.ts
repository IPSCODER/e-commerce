export const isAunthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token
}


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login'
}

export const isAdmin = () => localStorage.getItem('role') === 'ADMIN'