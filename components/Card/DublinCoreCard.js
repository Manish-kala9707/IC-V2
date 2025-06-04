import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Table } from "react-bootstrap";
const DublinCoreCard = ({ detailData }) => {
  let {
    field_video_streaming_url,
    title,
    field_dc_date_issued,
    field_dc_description_abstract,
    field_dc_language_iso,
    field_pdf_digital_file,
    field_dc_type,
    field_dc_format_extent,
    field_parent_library_name,
    field_dc_description,
    field_dc_description_sponsorship,
    field_dc_format_mimetype,
    field_dc_date_available,
    field_dc_date_accessioned,
    field_type_of_content,
    field_ic_video_streaming_url,
    field_ich_videos,
    field_dc_publisher,
    field_dc_relation_ispartofseries,
    field_dc_format_duration,
    field_dc_contributor,
    field_dc_format_source,
    field_forts_videos_streaming_lin,
    field_dc_source,
    field_dc_subject,
    field_dc_alternativetitle,
    field_dc_contributor_author,
    field_dc_coverage_temporal,
    field_dc_identifier_accessionnum,
    field_dc_identifier_other,
    field_flip_book_link,
    field_parent_dspace_community_na,
    field_dc_identifier_uri,
    field_audio_digital_files,
    field_cdwa_location,
    field_digital_data_comments,
    field_dc_contributor_bookreviewer,
    field_dc_contributor_director,
    field_dc_contributor_editor,
    field_dc_contributor_graphicartist,
    field_dc_contributor_musician,
    field_dc_contributor_presenter,
    field_dc_contributor_producer,
    field_dc_contributor_scriptwrite,
    field_dc_contributor_singer,
    field_dc_contributor_translator,
    field_dc_contributor_compiler,
    field_dc_coverage_spatial,
    field_dc_date,
    field_dc_date_copyright,
    field_dc_date_recorded,
    field_dc_description_provenance,
    field_dc_format,
    field_dc_format_material,
    field_dc_format_medium,
    field_dc_identifier_classnumber,
    field_dc_identifier_issuenumber,
    field_dc_identifier_volumenumber,
    field_dc_title_parallel,
    field_dcterms_audience,
    field_digital_image_file,
    field_fol_category,
    field_nvli_item_type,
    field_parent_collection_in_dspace,
    field_select_state_wise,
    field_ich_state,
    field_video_digital_file,
  } = detailData;
  return (
    <Accordion defaultActiveKey="1" className="accord-component">
      <Accordion.Item eventKey="0" className="accord-item">
        <Accordion.Header className="accord-item-header">
          Dublin Core View
        </Accordion.Header>
        <Accordion.Body>
          <Table striped className="table table-responsive">
            <thead>
              <tr>
                <th>DC Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {field_dc_contributor_author &&
                field_dc_contributor_author !== null &&
                field_dc_contributor_author !== "" && (
                  <tr>
                    <td>dc.contributor.author</td>
                    <td>{field_dc_contributor_author}</td>
                  </tr>
                )}
              {field_dc_date_accessioned &&
                field_dc_date_accessioned !== null &&
                field_dc_date_accessioned !== "" && (
                  <tr>
                    <td>dc.date.accessioned</td>
                    <td>{field_dc_date_accessioned}</td>
                  </tr>
                )}
              {field_dc_date_available &&
                field_dc_date_available !== null &&
                field_dc_date_available !== "" && (
                  <tr>
                    <td>dc.date.available</td>
                    <td>{field_dc_date_available}</td>
                  </tr>
                )}
              {field_dc_date_issued &&
                field_dc_date_issued !== null &&
                field_dc_date_issued !== "" && (
                  <tr>
                    <td>dc.date.issued</td>
                    <td>{field_dc_date_issued}</td>
                  </tr>
                )}
              {field_dc_description_abstract &&
                field_dc_description_abstract !== null &&
                field_dc_description_abstract !== "" && (
                  <tr>
                    <td>dc.description.abstract</td>
                    <td>{field_dc_description_abstract}</td>
                  </tr>
                )}
              {field_dc_description_sponsorship &&
                field_dc_description_sponsorship !== null &&
                field_dc_description_sponsorship !== "" && (
                  <tr>
                    <td>dc.description.sponsorship</td>
                    <td>{field_dc_description_sponsorship}</td>
                  </tr>
                )}
              {field_dc_format_extent &&
                field_dc_format_extent !== null &&
                field_dc_format_extent !== "" && (
                  <tr>
                    <td>dc.format.extent</td>
                    <td>{field_dc_format_extent}</td>
                  </tr>
                )}
              {field_dc_format_mimetype &&
                field_dc_format_mimetype !== null &&
                field_dc_format_mimetype !== "" && (
                  <tr>
                    <td>dc.format.mimetype</td>
                    <td>{field_dc_format_mimetype}</td>
                  </tr>
                )}
              {field_dc_language_iso &&
                field_dc_language_iso !== null &&
                field_dc_language_iso !== "" && (
                  <tr>
                    <td>dc.language.iso</td>
                    <td>{field_dc_language_iso}</td>
                  </tr>
                )}
              {field_dc_publisher &&
                field_dc_publisher !== null &&
                field_dc_publisher !== "" && (
                  <tr>
                    <td>dc.Publisher</td>
                    <td>{field_dc_publisher}</td>
                  </tr>
                )}
              {field_dc_relation_ispartofseries &&
                field_dc_relation_ispartofseries !== null &&
                field_dc_relation_ispartofseries !== "" && (
                  <tr>
                    <td>dc.relation.ispartofseries</td>
                    <td>{field_dc_relation_ispartofseries}</td>
                  </tr>
                )}
              {field_dc_format_duration &&
                field_dc_format_duration !== null &&
                field_dc_format_duration !== "" && (
                  <tr>
                    <td>dc.format.duration</td>
                    <td>{field_dc_format_duration}</td>
                  </tr>
                )}
              {field_dc_type &&
                field_dc_type !== null &&
                field_dc_type !== "" && (
                  <tr>
                    <td>dc.type</td>
                    <td>{field_dc_type}</td>
                  </tr>
                )}
              {field_dc_contributor &&
                field_dc_contributor !== null &&
                field_dc_contributor !== "" && (
                  <tr>
                    <td>dc.contributor</td>
                    <td>{field_dc_contributor}</td>
                  </tr>
                )}
              {field_type_of_content &&
                field_type_of_content !== null &&
                field_type_of_content !== "" && (
                  <tr>
                    <td>dc.type.of.content</td>
                    <td>{field_type_of_content}</td>
                  </tr>
                )}
              {field_parent_library_name &&
                field_parent_library_name !== null &&
                field_parent_library_name !== "" && (
                  <tr>
                    <td>dc.parent.source</td>
                    <td>{field_parent_library_name}</td>
                  </tr>
                )}
              {field_dc_identifier_other &&
                field_dc_identifier_other !== null &&
                field_dc_identifier_other !== "" && (
                  <tr>
                    <td>dc.identifier.other</td>
                    <td>{field_dc_identifier_other}</td>
                  </tr>
                )}
              {field_dc_format_source &&
                field_dc_format_source !== null &&
                field_dc_format_source !== "" && (
                  <tr>
                    <td>dc.format.source</td>
                    <td>{field_dc_format_source}</td>
                  </tr>
                )}
              {field_dc_description &&
                field_dc_description !== null &&
                field_dc_description !== "" && (
                  <tr>
                    <td>dc.description</td>
                    <td>{field_dc_description}</td>
                  </tr>
                )}
              {field_dc_source &&
                field_dc_source !== null &&
                field_dc_source !== "" && (
                  <tr>
                    <td>dc.source</td>
                    <td>{field_dc_source}</td>
                  </tr>
                )}
              {field_dc_subject &&
                field_dc_subject !== null &&
                field_dc_subject !== "" && (
                  <tr>
                    <td>dc.subject</td>
                    <td>{field_dc_subject.replaceAll("<br />\n"," ")}</td>
                  </tr>
                )}
              {field_dc_alternativetitle &&
                field_dc_alternativetitle !== null &&
                field_dc_alternativetitle !== "" && (
                  <tr>
                    <td>dc_alternativetitle</td>
                    <td>{field_dc_alternativetitle}</td>
                  </tr>
                )}
              {field_dc_coverage_temporal &&
                field_dc_coverage_temporal !== null &&
                field_dc_coverage_temporal !== "" && (
                  <tr>
                    <td>dc.coverage.temporal</td>
                    <td>{field_dc_coverage_temporal}</td>
                  </tr>
                )}
              {field_dc_identifier_accessionnum &&
                field_dc_identifier_accessionnum !== null &&
                field_dc_identifier_accessionnum !== "" && (
                  <tr>
                    <td>dc.identifier.accessionnumber</td>
                    <td>{field_dc_identifier_accessionnum}</td>
                  </tr>
                )}
 
          
              
              {/* field_audio_digital_files */}
              {field_audio_digital_files &&
                field_audio_digital_files !== null &&
                field_audio_digital_files !== "" && (
                  <tr>
                    <td>Audio Digital Files</td>
                    <td>{field_audio_digital_files}</td>
                  </tr>
                )}
 
              {/* field_cdwa_location */}
              {field_cdwa_location &&
                field_cdwa_location !== null &&
                field_cdwa_location !== "" && (
                  <tr>
                    <td>cdwa.location</td>
                    <td>{field_cdwa_location}</td>
                  </tr>
                )}
 
              {/* field_digital_data_comments */}
              {field_digital_data_comments &&
                field_digital_data_comments !== null &&
                field_digital_data_comments !== "" && (
                  <tr>
                    <td>Comments</td>
                    <td>{field_digital_data_comments}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_bookreviewer */}
              {field_dc_contributor_bookreviewer &&
                field_dc_contributor_bookreviewer !== null &&
                field_dc_contributor_bookreviewer !== "" && (
                  <tr>
                    <td>dc.contributor.bookreviewer</td>
                    <td>{field_dc_contributor_bookreviewer}</td>
                  </tr>
                )}
              {/* field_dc_contributor_director */}
              {field_dc_contributor_director &&
                field_dc_contributor_director !== null &&
                field_dc_contributor_director !== "" && (
                  <tr>
                    <td>dc.contributor.director</td>
                    <td>{field_dc_contributor_director}</td>
                  </tr>
                )}
              {/* field_dc_contributor_editor */}
              {field_dc_contributor_editor &&
                field_dc_contributor_editor !== null &&
                field_dc_contributor_editor !== "" && (
                  <tr>
                    <td>dc.contributor.editor</td>
                    <td>{field_dc_contributor_editor}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_graphicartist */}
              {field_dc_contributor_graphicartist &&
                field_dc_contributor_graphicartist !== null &&
                field_dc_contributor_graphicartist !== "" && (
                  <tr>
                    <td>dc.contributor.graphicartist</td>
                    <td>{field_dc_contributor_graphicartist}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_musician */}
              {field_dc_contributor_musician &&
                field_dc_contributor_musician !== null &&
                field_dc_contributor_musician !== "" && (
                  <tr>
                    <td>dc.contributor.musician</td>
                    <td>{field_dc_contributor_musician}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_presenter */}
              {field_dc_contributor_presenter &&
                field_dc_contributor_presenter !== null &&
                field_dc_contributor_presenter !== "" && (
                  <tr>
                    <td>dc.contributor.presenter</td>
                    <td>{field_dc_contributor_presenter}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_producer */}
              {field_dc_contributor_producer &&
                field_dc_contributor_producer !== null &&
                field_dc_contributor_producer !== "" && (
                  <tr>
                    <td>dc.contributor.producer</td>
                    <td>{field_dc_contributor_producer}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_scriptwrite */}
              {field_dc_contributor_scriptwrite &&
                field_dc_contributor_scriptwrite !== null &&
                field_dc_contributor_scriptwrite !== "" && (
                  <tr>
                    <td>dc.contributor.scriptwriter</td>
                    <td>{field_dc_contributor_scriptwrite}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_singer */}
              {field_dc_contributor_singer &&
                field_dc_contributor_singer !== null &&
                field_dc_contributor_singer !== "" && (
                  <tr>
                    <td>dc.contributor.singer</td>
                    <td>{field_dc_contributor_singer}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_translator */}
              {field_dc_contributor_translator &&
                field_dc_contributor_translator !== null &&
                field_dc_contributor_translator !== "" && (
                  <tr>
                    <td>dc.contributor.translator</td>
                    <td>{field_dc_contributor_translator}</td>
                  </tr>
                )}
 
              {/* field_dc_contributor_compiler */}
              {field_dc_contributor_compiler &&
                field_dc_contributor_compiler !== null &&
                field_dc_contributor_compiler !== "" && (
                  <tr>
                    <td>dc.contributr.compiler</td>
                    <td>{field_dc_contributor_compiler}</td>
                  </tr>
                )}
 
              {/* field_dc_coverage_spatial */}
              {field_dc_coverage_spatial &&
                field_dc_coverage_spatial !== null &&
                field_dc_coverage_spatial !== "" && (
                  <tr>
                    <td>dc.coverage.spatial</td>
                    <td>{field_dc_coverage_spatial}</td>
                  </tr>
                )}
 
              {/* field_dc_date */}
              {field_dc_date &&
                field_dc_date !== null &&
                field_dc_date !== "" && (
                  <tr>
                    <td>dc_date</td>
                    <td>{field_dc_date}</td>
                  </tr>
                )}
 
              {/* field_dc_date_copyright */}
              {field_dc_date_copyright &&
                field_dc_date_copyright !== null &&
                field_dc_date_copyright !== "" && (
                  <tr>
                    <td>dc.date.copyright</td>
                    <td>{field_dc_date_copyright}</td>
                  </tr>
                )}
 
              {/* field_dc_date_recorded */}
              {field_dc_date_recorded &&
                field_dc_date_recorded !== null &&
                field_dc_date_recorded !== "" && (
                  <tr>
                    <td>dc.date.recorded</td>
                    <td>{field_dc_date_recorded}</td>
                  </tr>
                )}
 
              {/* field_dc_description_provenance */}
              {field_dc_description_provenance &&
                field_dc_description_provenance !== null &&
                field_dc_description_provenance !== "" && (
                  <tr>
                    <td>dc.description.provenance</td>
                    <td>{field_dc_description_provenance}</td>
                  </tr>
                )}
 
              {/* field_dc_format */}
              {field_dc_format &&
                field_dc_format !== null &&
                field_dc_format !== "" && (
                  <tr>
                    <td>dc.format</td>
                    <td>{field_dc_format}</td>
                  </tr>
                )}
 
              {/* field_dc_format_material */}
              {field_dc_format_material &&
                field_dc_format_material !== null &&
                field_dc_format_material !== "" && (
                  <tr>
                    <td>dc.format.material</td>
                    <td>{field_dc_format_material}</td>
                  </tr>
                )}
 
              {/* field_dc_format_medium */}
              {field_dc_format_medium &&
                field_dc_format_medium !== null &&
                field_dc_format_medium !== "" && (
                  <tr>
                    <td>dc.format.medium</td>
                    <td>{field_dc_format_medium}</td>
                  </tr>
                )}
 
              {/* field_dc_identifier_classnumber */}
              {field_dc_identifier_classnumber &&
                field_dc_identifier_classnumber !== null &&
                field_dc_identifier_classnumber !== "" && (
                  <tr>
                    <td>dc.identifier.classnumber</td>
                    <td>{field_dc_identifier_classnumber}</td>
                  </tr>
                )}
 
              {/* field_dc_identifier_issuenumber */}
              {field_dc_identifier_issuenumber &&
                field_dc_identifier_issuenumber !== null &&
                field_dc_identifier_issuenumber !== "" && (
                  <tr>
                    <td>dc.identifier.issuenumber</td>
                    <td>{field_dc_identifier_issuenumber}</td>
                  </tr>
                )}
 
              {/* field_dc_identifier_volumenumber */}
              {field_dc_identifier_volumenumber &&
                field_dc_identifier_volumenumber !== null &&
                field_dc_identifier_volumenumber !== "" && (
                  <tr>
                    <td>dc.identifier.volumenumber</td>
                    <td>{field_dc_identifier_volumenumber}</td>
                  </tr>
                )}
 
              {/* field_dc_title_parallel */}
              {field_dc_title_parallel &&
                field_dc_title_parallel !== null &&
                field_dc_title_parallel !== "" && (
                  <tr>
                    <td>dc.title.parallel</td>
                    <td>{field_dc_title_parallel}</td>
                  </tr>
                )}
 
              {/* field_dcterms_audience */}
              {field_dcterms_audience &&
                field_dcterms_audience !== null &&
                field_dcterms_audience !== "" && (
                  <tr>
                    <td>dcterms.audience</td>
                    <td>{field_dcterms_audience}</td>
                  </tr>
                )}
       
 
              {/* field_flip_book_link */}
             
 
              {/* field_fol_category */}
              {field_fol_category &&
                field_fol_category !== null &&
                field_fol_category !== "" && (
                  <tr>
                    <td>FOL Category</td>
                    <td>{field_fol_category}</td>
                  </tr>
                )}
 
              {/* field_nvli_item_type */}
              {field_nvli_item_type &&
                field_nvli_item_type !== null &&
                field_nvli_item_type !== "" && (
                  <tr>
                    <td>NVLI item type</td>
                    <td>{field_nvli_item_type}</td>
                  </tr>
                )}
 
              {/* field_parent_collection_in_dspace */}
              {field_parent_collection_in_dspace &&
                field_parent_collection_in_dspace !== null &&
                field_parent_collection_in_dspace !== "" && (
                  <tr>
                    <td>Parent Collection in Dspace</td>
                    <td>{field_parent_collection_in_dspace}</td>
                  </tr>
                )}
 
      
           
 
              {/* field_pdf_digital_file */}
            
              {/* field_select_state_wise */}
              {field_select_state_wise &&
                field_select_state_wise !== null &&
                field_select_state_wise !== "" && (
                  <tr>
                    <td>Select State Wise</td>
                    <td>{field_select_state_wise}</td>
                  </tr>
                )}
 
              {/* field_ich_state */}
              {field_ich_state &&
                field_ich_state !== null &&
                field_ich_state !== "" && (
                  <tr>
                    <td>State</td>
                    <td>{field_ich_state}</td>
                  </tr>
                )}
 
           
              
             
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
 
export default DublinCoreCard;