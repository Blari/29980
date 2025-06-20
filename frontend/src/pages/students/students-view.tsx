import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/students/studentsSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

const StudentsView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { students } = useAppSelector((state) => state.students);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View students')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View students')}
          main
        >
          <BaseButton
            color='info'
            label='Edit'
            href={`/students/students-edit/?id=${id}`}
          />
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>FirstName</p>
            <p>{students?.first_name}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>LastName</p>
            <p>{students?.last_name}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Enrollments</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>PaymentStatus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.enrollments &&
                      Array.isArray(students.enrollments) &&
                      students.enrollments.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/enrollments/enrollments-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='payment_status'>
                            {item.payment_status}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!students?.enrollments?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Enrollments Student</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>PaymentStatus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.enrollments_student &&
                      Array.isArray(students.enrollments_student) &&
                      students.enrollments_student.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/enrollments/enrollments-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='payment_status'>
                            {item.payment_status}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!students?.enrollments_student?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/students/students-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

StudentsView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_STUDENTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default StudentsView;
