import React from 'react';
import styles from './singlestore.module.scss';

const SingleStore = () => {
  return (
    <div className={`${styles.singlestore} container`}>
      {/* info store */}
     <div className='row mt-5'>
        <div className="col-12 col-md bg-primary ">
        <iframe style={{border: 0, maxWidth: '100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.0810346161247!2d23.799380014963578!3d38.02189027971522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a198f9992a6997%3A0x434aa537944630f7!2sAgiou+Georgiou+10%2C+Chalandri+152+34!5e0!3m2!1sen!2sgr!4v1536055729273" allowFullScreen="allowfullscreen" width="100%" height={450} frameBorder={0} />

        </div>
        <div className="col-12 col-md bg-secondary">
            <p>
            <strong>"La Vie en Rose"</strong> <span> - καταστηματα στον Πειραιά</span>
            </p>

            <p>
            <strong>Στοιχεία Επικοινωνίας</strong>
            </p>

            <p>
                <strong>Διεύθυνση</strong>
                <span>lalalal</span>
            </p>

            <p>
                <strong>Email</strong>
                <a href='mailto:info@info.gr'>info@info.gr</a>
            </p>

            <p>
                <strong>Email</strong>
                <a href='tel:+30123456'>+30123456</a>
            </p>

            <p>
                <strong>
                    Ωράριο λειτουργίας
                </strong>
                <br />
                <span>
                    Δευτέρα - Παρασκευή 09:00 έως 21:00
                </span>
                <br />
                <span>
                    Σαββάτο 09:00 έως 18:00
                </span>
            </p>


        </div>     
    </div>
    </div>
  );
};

export default SingleStore;
