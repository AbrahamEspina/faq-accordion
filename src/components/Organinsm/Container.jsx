const Container = ({ children }) => {
  return (
    <main className='antialiased w-full h-screen flex flex-col justify-between bg-lightPink'>
      {children}
    </main>
  )
}

export default Container;