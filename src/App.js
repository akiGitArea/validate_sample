import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            {...register('email', {
              required: { 
                value: true,
                message: '入力が必須の項目です。',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'アルファベットのみ入力してください。',
              },
              minLength: {
                value: 8,
                message: '8文字以上入力してください。',
              },
            })}/>
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password"
            {...register('password', {
              required: { 
                value: true,
                message: '入力が必須の項目です。',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'アルファベットのみ入力してください。',
              },
              minLength: {
                value: 8,
                message: '8文字以上入力してください。',
              },
            })}/>
          {errors.password?.types.pattern && (
            <div>{errors.password.types.pattern}</div>
          )}
          {errors.password?.types.minLength && (
            <div>{errors.password.types.minLength}</div>
          )}
        </div>
        <button type="submit" disabled={!isDirty || !isValid}>
          ログイン
        </button>
      </form>
    </div>
  );
}

export default App;