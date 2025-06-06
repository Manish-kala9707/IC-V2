import React, { useState, useEffect } from 'react';
// import './HistoricStates.css';

function HisStateTimeline() {
    document.addEventListener("DOMContentLoaded", function() {
        let currentIndex = 0;
        const timelineItems = document.querySelectorAll('#timeline-list li');
        const prevButton = document.querySelector('.arrow__prev');
        const nextButton = document.querySelector('.arrow__next');
    
        function showTimelineItem(index) {
          timelineItems.forEach((item, i) => {
            if (i === index) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        }
    
        function prevTimeline() {
          if (currentIndex > 0) {
            currentIndex--;
            showTimelineItem(currentIndex);
          }
        }
    
        function nextTimeline() {
          if (currentIndex < timelineItems.length - 1) {
            currentIndex++;
            showTimelineItem(currentIndex);
          }
        }
    
        // Add event listeners
        prevButton.addEventListener('click', prevTimeline);
        nextButton.addEventListener('click', nextTimeline);
    
        // Initially show the first timeline item
        showTimelineItem(currentIndex);
      });
    return (
        <>


            <section className="timeline ">
                <ol>
                    <li>
                        <div>
                            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1937</time> Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1940</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1943</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1946</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1956</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1957</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1967</time> Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1977</time> Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>1985</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2000</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2005</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                        </div>
                    </li>
                    <li></li>
                </ol>

                 {/* <div class="arrows">
                    <button class="arrow arrow__prev disabled" disabled>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow" />
                    </button>
                    <button class="arrow arrow__next">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow" />
                    </button>
                </div> */}


            </section>

           {/*  <div class="arrows">
                <button class="arrow arrow__prev">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow" />
                </button>
                <button class="arrow arrow__next">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow" />
                </button>
            </div> */}
        </>
    )
}

export default HisStateTimeline
