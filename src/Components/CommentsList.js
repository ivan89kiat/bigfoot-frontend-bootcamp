// import ListGroup from "react-bootstrap/ListGroup";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { BACKEND_URL } from "../constant";
// import { ListGroupItem, Button, Form } from "react-bootstrap";

// export default function CommentsList(props) {
//   const user = true;

//   const [comments, setComments] = useState();
//   const [commentKey, setCommentKey] = useState("");
//   const [comment, setComment] = useState([
//     {
//       content: "",
//     },
//   ]);
//   const [editStatus, setEditStatus] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/sightings/${props.sightingIndex}/comments`)
//       .then((res) => {
//         setComments(res.data);
//       });
//   }, [commentKey]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(`${BACKEND_URL}/sightings/${props.sightingIndex}/comments`, comment)
//       .then((res) => {
//         setComment({ content: "" });
//         setCommentKey(1);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     setCommentKey("");
//   };

//   const handleEdit = (e) => {
//     let commentKey = e.target.id;
//     if (user) {
//       axios
//         .get(
//           `${BACKEND_URL}/sightings/${props.sightingIndex}/comments/${commentKey}`
//         )
//         .then((res) => {
//           setComment({ content: res.data.content });
//         });
//       setCommentKey(commentKey);
//       setEditStatus(true);
//     }
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     if (user) {
//       axios
//         .put(
//           `${BACKEND_URL}/sightings/${props.sightingIndex}/comments/${commentKey}`,
//           comment
//         )
//         .then((res) => {
//           setComment({ content: "" });
//           setCommentKey(1);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//     setCommentKey("");
//     setEditStatus(false);
//   };

//   const handleDelete = async (e) => {
//     e.preventDefault();
//     let commentKey = e.target.id;
//     if (user) {
//       axios
//         .delete(
//           `${BACKEND_URL}/sightings/${props.sightingIndex}/comments/${commentKey}`
//         )
//         .then((res) => setCommentKey(1))
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//     setCommentKey("");
//   };

//   const commentsList = comments
//     ? comments.map((comment) => {
//         return (
//           <ListGroup>
//             <ListGroupItem key={comment.id}>
//               {comment.content}{" "}
//               <Button id={comment.id} variant="dark" onClick={handleEdit}>
//                 Edit
//               </Button>
//               |
//               <Button id={comment.id} onClick={handleDelete}>
//                 Delete
//               </Button>
//             </ListGroupItem>
//           </ListGroup>
//         );
//       })
//     : null;

//   return (
//     <div>
//       <div>{commentsList}</div>
//       <div>
//         <Form onSubmit={editStatus ? handleEditSubmit : handleSubmit}>
//           <Form.Label>Post Comment:</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={comment.content}
//             onChange={(e) => setComment({ content: e.target.value })}
//           />
//           <Button type="submit" value="submit">
//             {editStatus ? `Edit Comment` : `Submit`}
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
