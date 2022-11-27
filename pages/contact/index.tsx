import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  category: string;
  title: string;
  content: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        console.log('Response received');
        if (res.status === 200) {
          alert('이메일이 전송되었습니다.');
        }
      })
      .catch(error => {
        console.log('이메일 전송에 실패했습니다.', error);
        alert('이메일 전송에 실패했습니다.');
      });
  };

  return (
    <main className="relative w-11/12 h-[calc(90vh-50px)] mx-auto md:w-4/5">
      <h2>Contact Me</h2>
      <form className="flex flex-col w-1/2 gap-2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between w-full gap-5">
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#0EA5E9"
              viewBox="0 0 640 512"
            >
              <path d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32v7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92v71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H460.4l18-53.9c3.8-11.3 .9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3V128c0-53-43-96-96-96s-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32V128zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5V335.6c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24H64.3c-.2-2.8-.3-5.6-.3-8.5V368H24zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24H305.9c-6.7 16.3-14.2 32.3-22.3 48H616z" />
            </svg>
          </label>
          <input
            className="w-full px-2 rounded"
            type="text"
            required={true}
            placeholder="이름"
            {...register('name', {
              required: '반드시 이름을 입력해주세요.',
              minLength: {
                value: 2,
                message: '2글자 이상을 입력해주세요',
              },
            })}
          />
        </div>
        {errors.name && (
          <p className="w-full text-sm text-right text-red-500">{errors.name.message}</p>
        )}
        <div className="flex justify-between w-full gap-5">
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#0EA5E9"
              viewBox="0 0 512 512"
            >
              <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z" />
            </svg>
          </label>
          <input
            className="w-full px-2 rounded"
            type="email"
            required={true}
            placeholder="이메일"
            {...register('email', {
              required: '반드시 이메일을 입력해주세요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '이메일 형식에 맞게 입력해주세요.',
              },
            })}
          />
        </div>
        {errors.email && (
          <p className="w-full text-sm text-right text-red-500">{errors.email.message}</p>
        )}
        <div className="flex justify-between w-full gap-5">
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#0EA5E9"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </label>
          <input
            className="w-full px-2 rounded"
            type="text"
            placeholder="휴대폰 번호"
            {...register('phone', {
              pattern: {
                value: /^\d{3}-\d{3,4}-\d{4}$/,
                message: '000-0000-0000 형식으로 입력해주세요.',
              },
            })}
          />
        </div>
        {errors.phone && (
          <p className="w-full text-sm text-right text-red-500">{errors.phone.message}</p>
        )}
        <div className="flex justify-between w-full gap-5">
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#0EA5E9"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
          </label>
          <select
            className="w-full px-2 rounded"
            {...register('category', { required: '주제를 선택해주세요.' })}
          >
            <option value="">주제</option>
            <option value="채용">채용</option>
            <option value="프로젝트">프로젝트</option>
            <option value="경험">경험</option>
            <option value="기타">기타</option>
          </select>
        </div>
        {errors.category && (
          <p className="w-full text-sm text-right text-red-500">{errors.category.message}</p>
        )}
        <input
          className="w-full h-6 px-2 mt-4 rounded"
          type="text"
          placeholder="제목"
          {...register('title', {
            minLength: {
              value: 3,
              message: '3글자 이상의 제목을 입력해주세요',
            },
          })}
        />
        {errors.title && (
          <p className="w-full text-sm text-right text-red-500">{errors.title.message}</p>
        )}
        <textarea
          className="w-full h-32 p-2 rounded"
          placeholder="어떤 사항이 궁금하신가요?"
          {...register('content', {
            minLength: {
              value: 10,
              message: '10글자 이상, 300글자 이하의 내용을 입력해주세요.',
            },
            maxLength: {
              value: 300,
              message: '10글자 이상, 300글자 이하의 내용을 입력해주세요.',
            },
          })}
        ></textarea>
        {errors.content && (
          <p className="w-full text-sm text-right text-red-500">{errors.content.message}</p>
        )}
        <button className="w-full h-8 font-bold rounded bg-sky-500 hover:bg-sky-500/40 hover:text-sky-500">
          문의하기
        </button>
      </form>
    </main>
  );
};

export default Contact;
