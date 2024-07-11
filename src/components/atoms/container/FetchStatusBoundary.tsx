import { ReactNode } from 'react';
import FetchStatus from '@constants/FetchStatus';
import Container from '@components/atoms/container/Container';
import LoadingSpinner from '@components/atoms/LoadingSpinner';

interface FetchStatusBoundaryProps {
  children: ReactNode;
  fetchStatus: FetchStatus;
  loading?: ReactNode;
  error?: ReactNode;
}

function FetchStatusBoundary({
  children, fetchStatus, loading, error,
}: FetchStatusBoundaryProps) {
  if (fetchStatus === FetchStatus.FETCHING) {
    return loading || (
      <Container elementSize="full-width" justifyContent="center">
        <Container elementSize={{ width: '80px', height: '80px' }}>
          <LoadingSpinner />
        </Container>
      </Container>
    );
  }

  if (fetchStatus === FetchStatus.FETCH_ERROR) {
    return error || (
      <Container elementSize="full-width" justifyContent="center">
        <p>서버에서 데이터 로드 중 오류가 발생했습니다.</p>
      </Container>
    );
  }

  return children;
}

export default FetchStatusBoundary;