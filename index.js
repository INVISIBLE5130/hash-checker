const wrapper = document.createElement('div'),
    wrapperForm = document.createElement('form'),
    wrapperFormLogin = document.createElement('input'),
    wrapperFormPassword = document.createElement('input'),
    wrapperFormSubmit = document.createElement('button')

wrapper.style.top = '0'
wrapper.style.left = '0'
wrapper.style.width = '100%'
wrapper.style.height = '100vh'
wrapper.style.position = 'fixed'

wrapperForm.style.width = '400px'
wrapperForm.style.padding = '20px'
wrapperForm.style.display = 'flex'
wrapperForm.style.margin = '0 auto'
wrapperForm.style.transform = 'translateY(-200px)'
wrapperForm.style.transition = '.5s'
wrapperForm.style.borderRadius = '1vh'
wrapperForm.style.flexDirection = 'column'
wrapperForm.style.backgroundColor = '#375167'

const inputStyle = {
    width: '100%',
    padding: '1vh',
    outline: 'none',
    color: '#828282',
    fontSize: '16px',
    lineHeight: '20px',
    borderRadius: '1vh',
    border: '1px solid #E0E0E0',
    boxSizing: 'border-box'
}

wrapperFormLogin.style.width = inputStyle.width
wrapperFormLogin.style.padding = inputStyle.padding
wrapperFormLogin.style.outline = inputStyle.outline
wrapperFormLogin.style.color = inputStyle.color
wrapperFormLogin.style.fontSize = inputStyle.fontSize
wrapperFormLogin.style.lineHeight = inputStyle.lineHeight
wrapperFormLogin.style.borderRadius = inputStyle.borderRadius
wrapperFormLogin.style.border = inputStyle.border
wrapperFormLogin.style.boxSizing = inputStyle.boxSizing

wrapperFormLogin.type = 'text'
wrapperFormLogin.placeholder = 'Login'

wrapperFormPassword.style.margin = '1vh 0 0'
wrapperFormPassword.style.width = inputStyle.width
wrapperFormPassword.style.padding = inputStyle.padding
wrapperFormPassword.style.outline = inputStyle.outline
wrapperFormPassword.style.color = inputStyle.color
wrapperFormPassword.style.fontSize = inputStyle.fontSize
wrapperFormPassword.style.lineHeight = inputStyle.lineHeight
wrapperFormPassword.style.borderRadius = inputStyle.borderRadius
wrapperFormPassword.style.border = inputStyle.border
wrapperFormPassword.style.boxSizing = inputStyle.boxSizing

wrapperFormPassword.type = 'password'
wrapperFormPassword.placeholder = 'Password'

wrapperFormSubmit.style.width = '100%'
wrapperFormSubmit.style.border = 'none'
wrapperFormSubmit.style.outline = 'none'
wrapperFormSubmit.style.color = '#253746'
wrapperFormSubmit.style.marginTop = '1vh'
wrapperFormSubmit.style.cursor = 'pointer'
wrapperFormSubmit.style.padding = '1.5vh 0'
wrapperFormSubmit.style.fontSize = '16px'
wrapperFormSubmit.style.fontWeight = 'bold'
wrapperFormSubmit.style.borderRadius = '1vh'
wrapperFormSubmit.style.background = '#F2C94C'

wrapperFormSubmit.innerHTML = 'Sign In'

wrapperFormSubmit.addEventListener('click', e => {
    e.preventDefault()
    fetch('', {
        method: 'POST',
        body: JSON.stringify({
            login: wrapperFormLogin.value,
            password: wrapperFormPassword.value
        })
    })
    wrapperForm.style.transform = 'translateY(-200px)'
})

wrapperForm.appendChild(wrapperFormLogin)
wrapperForm.appendChild(wrapperFormPassword)
wrapperForm.appendChild(wrapperFormSubmit)
wrapper.appendChild(wrapperForm)
document.body.appendChild(wrapper)

window.addEventListener('load', () => {
    const keyHandler = e => {
        e.preventDefault()
        if (e.code === 'F1') {
            wrapperForm.style.transform = 'translateY(0)'
            window.removeEventListener('keydown', keyHandler)
        }
    }
    window.addEventListener('keydown', keyHandler)
})
