// Pakai enum untuk menentukan status karena mungkinlebih optimal karena mengkonsumsi data yang lebih sedikit
// penggunaannya mirip cengan string literal biasa jadi status = success atau status= erro
const enum ResultStatus {
  Success,
  Error,
}

type Result<T> = { status: ResultStatus.Success; data: T } | { status: ResultStatus.Error; error: Error };

type User = {
  userId: number;
  name: string;
};

function getUser(userId: string): Result<User> {
  try {
    let user: User = { userId: 20, name: 'indra' };
    return { status: ResultStatus.Success, data: user };
  } catch (e) {
    return { status: ResultStatus.Error, error: e };
  }
}
