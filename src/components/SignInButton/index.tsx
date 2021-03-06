import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button 
      onClick={() => signOut()}
      className={styles.signInButton} 
      type="button"
    >
      <FaGithub color="#04D361" />
      
      {session.user.name}
      
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button 
      onClick={() => signIn('github')}
      className={styles.signInButton} 
      type="button"
    >
      <FaGithub color="#EBA417" />

      Sing in with GitHub
    </button>
  );
}
