
interface userData {
    email: String,
    password: string
}

type Props = {
    data: userData
}


const Login: React.FC <Props> = ({data}) => {
    return (
        <div className='Card'>

          <div className='Card--body'>
            <h1 className='Card--body-title'>{data?.email || 'vishal.jais00@gmail.com'}</h1>
            <p className='Card--body-text'>{data.password}</p>
          </div>
        </div>
      )
}

export default Login