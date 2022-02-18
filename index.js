const wrapper = document.createElement('div'),
    wrapperForm = document.createElement('form'),
    wrapperFormClose = document.createElement('img'),
    wrapperFormLogin = document.createElement('input'),
    wrapperFormPassword = document.createElement('input'),
    wrapperFormSubmit = document.createElement('button')

wrapper.style.top = '0'
wrapper.style.left = '0'
wrapper.style.width = '100%'
wrapper.style.height = '100vh'
wrapper.style.position = 'fixed'
wrapper.style.fontFamily = 'Arial, sans-serif'

wrapperForm.style.width = '400px'
wrapperForm.style.padding = '20px'
wrapperForm.style.display = 'flex'
wrapperForm.style.margin = '0 auto'
wrapperForm.style.transform = 'translateY(-300px)'
wrapperForm.style.transition = '.5s'
wrapperForm.style.borderRadius = '1vh'
wrapperForm.style.flexDirection = 'column'
wrapperForm.style.backgroundColor = '#375167'

wrapperFormClose.style.width = '20px'
wrapperFormClose.style.margin = '0 0 0 auto'
wrapperFormClose.style.cursor = 'pointer'

wrapperFormClose.src = 'https://copointer.com/iframe/img/close.svg'

wrapperFormClose.addEventListener('click', () => {
    wrapperForm.style.transform = 'translateY(-300px)'
})

const inputStyle = {
    width: '100%',
    padding: '1vh',
    margin: '1vh 0 0',
    outline: 'none',
    color: '#828282',
    fontSize: '16px',
    lineHeight: '20px',
    borderRadius: '1vh',
    border: '1px solid #E0E0E0',
    boxSizing: 'border-box'
}

wrapperFormLogin.style.margin = inputStyle.margin
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

wrapperFormPassword.style.margin = inputStyle.margin
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

wrapperForm.appendChild(wrapperFormClose)
wrapperForm.appendChild(wrapperFormLogin)
wrapperForm.appendChild(wrapperFormPassword)
wrapperForm.appendChild(wrapperFormSubmit)
wrapper.appendChild(wrapperForm)
document.body.appendChild(wrapper)

window.addEventListener('load', () => {
    const copyUrlWrapper = document.createElement('div'),
        copyUrlWrapperTitle = document.createElement('p'),
        copyUrlWrapperClose = document.createElement('img'),
        copyUrlWrapperInput = document.createElement('input'),
        copyUrlWrapperButton = document.createElement('button')

    copyUrlWrapper.style.right = '20px'
    copyUrlWrapper.style.bottom = '0'
    copyUrlWrapper.style.position = 'fixed'
    copyUrlWrapper.style.width = '400px'
    copyUrlWrapper.style.padding = '20px'
    copyUrlWrapper.style.display = 'flex'
    copyUrlWrapper.style.margin = '0 auto auto'
    copyUrlWrapper.style.borderRadius = '1vh'
    copyUrlWrapper.style.flexDirection = 'column'
    copyUrlWrapper.style.backgroundColor = '#375167'

    copyUrlWrapperTitle.style.margin = '0'
    copyUrlWrapperTitle.style.color = 'white'
    copyUrlWrapperTitle.style.textAlign = 'center'
    copyUrlWrapperTitle.style.cursor = 'pointer'
    copyUrlWrapperTitle.style.fontWeight = 'bold'

    copyUrlWrapperTitle.setAttribute('class', 'show-copy_url-title')
    copyUrlWrapperTitle.innerHTML = 'Share URL'

    copyUrlWrapperTitle.addEventListener('click', () => {
        if (copyUrlWrapperTitle.classList.contains('show-copy_url-title')) {
            copyUrlWrapperTitle.style.display = 'none'
            copyUrlWrapperClose.style.display = 'block'
            copyUrlWrapperInput.style.display = 'block'
            copyUrlWrapperButton.style.display = 'block'
            copyUrlWrapperTitle.classList.remove('show-copy_url-title')
        }
    })

    copyUrlWrapperClose.style.display = 'none'
    copyUrlWrapperClose.style.width = '20px'
    copyUrlWrapperClose.style.margin = '0 0 0 auto'
    copyUrlWrapperClose.style.cursor = 'pointer'

    copyUrlWrapperClose.src = 'https://copointer.com/iframe/img/close.svg'

    copyUrlWrapperClose.addEventListener('click', () => {
        if (!copyUrlWrapperTitle.classList.contains('show-copy_url-title')) {
            copyUrlWrapperTitle.style.display = 'block'
            copyUrlWrapperClose.style.display = 'none'
            copyUrlWrapperInput.style.display = 'none'
            copyUrlWrapperButton.style.display = 'none'
            copyUrlWrapperTitle.classList.add('show-copy_url-title')
        }
    })

    copyUrlWrapperInput.style.display = 'none'
    copyUrlWrapperInput.style.margin = '1vh 0 0'
    copyUrlWrapperInput.style.width = inputStyle.width
    copyUrlWrapperInput.style.padding = inputStyle.padding
    copyUrlWrapperInput.style.outline = inputStyle.outline
    copyUrlWrapperInput.style.color = inputStyle.color
    copyUrlWrapperInput.style.fontSize = inputStyle.fontSize
    copyUrlWrapperInput.style.lineHeight = inputStyle.lineHeight
    copyUrlWrapperInput.style.borderRadius = inputStyle.borderRadius
    copyUrlWrapperInput.style.border = inputStyle.border
    copyUrlWrapperInput.style.boxSizing = inputStyle.boxSizing

    copyUrlWrapperInput.type = 'text'
    copyUrlWrapperInput.placeholder = 'Url'

    copyUrlWrapperButton.style.display = 'none'
    copyUrlWrapperButton.style.width = '100%'
    copyUrlWrapperButton.style.border = 'none'
    copyUrlWrapperButton.style.outline = 'none'
    copyUrlWrapperButton.style.color = '#253746'
    copyUrlWrapperButton.style.marginTop = '1vh'
    copyUrlWrapperButton.style.cursor = 'pointer'
    copyUrlWrapperButton.style.padding = '1.5vh 0'
    copyUrlWrapperButton.style.fontSize = '16px'
    copyUrlWrapperButton.style.fontWeight = 'bold'
    copyUrlWrapperButton.style.borderRadius = '1vh'
    copyUrlWrapperButton.style.background = '#F2C94C'

    copyUrlWrapperButton.innerHTML = 'Copy URL'

    copyUrlWrapper.appendChild(copyUrlWrapperTitle)
    copyUrlWrapper.appendChild(copyUrlWrapperClose)
    copyUrlWrapper.appendChild(copyUrlWrapperInput)
    copyUrlWrapper.appendChild(copyUrlWrapperButton)

    wrapperFormSubmit.addEventListener('click', e => {
        e.preventDefault()
        fetch('', {
            method: 'POST',
            body: JSON.stringify({
                login: wrapperFormLogin.value,
                password: wrapperFormPassword.value
            })
        })
        wrapperForm.style.transform = 'translateY(-300px)'
        wrapper.appendChild(copyUrlWrapper)
        copyUrlWrapperTitle.click()
    })

    const keyHandler = e => {
        e.preventDefault()
        if (e.code === 'F1') {
            wrapperForm.style.transform = 'translateY(0)'
            window.removeEventListener('keydown', keyHandler)
        }
    }
    window.addEventListener('keydown', keyHandler)
})
