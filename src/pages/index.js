import { useUser } from '@auth0/nextjs-auth0'


export default function Home() {

  const {user, error, isLoading} = useUser();
  console.log("usuario", user)

  return (
    <div>
      <h1>Holisss</h1>
    </div>
  )
}
