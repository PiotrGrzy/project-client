import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useUrlQuery from '@/hooks/useUrlQuery';
import { verifyUserAccount } from '@/services/users.service';

const AccountVerifyView = () => {
  const query = useUrlQuery();
  const [id, setId] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [verifySuccess, setVerifySuccess] = useState(false);

  useEffect(() => {
    const userId = query.get('id');
    const verifyCode = query.get('verificationCode');
    setId(userId);
    setVerificationCode(verifyCode);
  }, [query]);

  const sendVerificationCode = async () => {
    if (!id || !verificationCode) {
      return setError('Invalid verification link');
    }
    try {
      await verifyUserAccount({ id, verificationCode });
      setVerifySuccess(true);
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (verifySuccess) {
    return (
      <div>
        <p>Verification successfull!</p>
        <p>
          Your can now{' '}
          <Link className="btn btn-primary" to={'/signin'}>
            log in to account
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>Please verify your account</p>
      <button className="btn btn-primary" onClick={sendVerificationCode}>
        Verify Account
      </button>

      {error && <p>Verification link is invalid</p>}
    </div>
  );
};

export default AccountVerifyView;
