import { useEffect, useState } from "react";
import $ from "jquery";
const Timeline = ({
  timelineIntroduction,
  timelineContent,
  timelinePlacement,
  timelineHeading,
  title,
  imageSrc,
  body,
  popupImage,
  videoLinks,
  nid,
}) => {
  useEffect(() => {
    $("#myModal").on("hidden.bs.modal", function () {
      $("#myModal video").attr("src", $("#myModal video").attr("src"));
    });

    (function ($) {
      $.fn.timeline = function () {
        var selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img",
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
        );

        var itemLength = selectors.item.length;
        $(window).scroll(function () {
          var max, min;
          var pos = $(this).scrollTop();
          selectors.item.each(function (i) {
            min = $(this).offset().top;
            max = $(this).height() + $(this).offset().top;
            if (i === itemLength - 2 && pos > min + $(this).height() / 2) {
              selectors.item.removeClass(selectors.activeClass);
              selectors.id.css(
                "background-image",
                "url(" +
                  selectors.item.last().find(selectors.img).attr("src") +
                  ")"
              );
              selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
              selectors.id.css(
                "background-image",
                "url(" + $(this).find(selectors.img).attr("src") + ")"
              );
              selectors.item.removeClass(selectors.activeClass);
              $(this).addClass(selectors.activeClass);
            }
          });
        });
      };
    })($);

    $("#timeline-1").timeline();
  }, []);

  return (
    <div className="timeline-container" id="timeline-1">
      {timelineIntroduction && (
        <h2 className="timeline-header__title">{timelineIntroduction}</h2>
      )}
      <div className="timeline__content1">
        <p style={{ textAlign: "center", color: "white", fontSize: "22px" }}>
          {timelineContent}
        </p>
      </div>

      <div className="timeline">
        {timelinePlacement === "Left" ? (
          <div className="timeline-item">
            <h3 className="timelinehed3">
              <b>{timelineHeading}</b>
            </h3>
            <div className="timeline__content">
              <h2 className="timeline__content-title">{title}</h2>
              <p className="timeline__content-desc">
                <img
                  className="timeline__img"
                  src={imageSrc}
                  alt=""
                  style={{ float: "left", width: "50%", marginRight: "10px" }}
                />
                {body}
              </p>
              <a
                className="timeline__img1"
                data-toggle="modal"
                data-target={`#mus${nid}`}
              >
                {popupImage}
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="timeline-item">
              <div className="timeline__content"></div>
            </div>
            <div className="timeline-item">
              <h3 className="timelineh3">
                <b>{timelineHeading}</b>
              </h3>
              <div className="timeline__content">
                <h2 className="timeline__content-title">{title}</h2>
                <p className="timeline__content-desc">
                  <img
                    className="timeline__img"
                    src={imageSrc}
                    alt=""
                    style={{ float: "left", width: "50%", marginRight: "10px" }}
                  />
                  {body}
                </p>
                <a
                  className="timeline__img1"
                  data-toggle="modal"
                  data-target={`#mus${nid}`}
                >
                  {popupImage}
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="modal" id={`mus${nid}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"></h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">{videoLinks}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
