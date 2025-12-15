import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Paper,
  Typography,
} from "@mui/material";
import Sidebar from "../Global/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import SaveIcon from "@mui/icons-material/Save";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PrintIcon from "@mui/icons-material/Print";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import LinkIcon from "@mui/icons-material/Link";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import AnchorIcon from "@mui/icons-material/Anchor";
import ImageIcon from "@mui/icons-material/Image";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import TableChartIcon from "@mui/icons-material/TableChart";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import LanguageIcon from "@mui/icons-material/Language";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Email = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [template, setTemplate] = useState("");
  const [selectedDate, setSelectedDate] = useState("12/12/2025");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSource, setShowSource] = useState(false);
  const editorRef = useRef(null);
  const isUpdatingRef = useRef(false);

  // Sync body content to editor when body changes externally (only when not updating from user input)
  useEffect(() => {
    if (editorRef.current && !isUpdatingRef.current && !showSource) {
      const currentContent = editorRef.current.innerHTML;
      // Only update if body changed externally (e.g., from cancel/reset)
      if (body === "" && currentContent !== "") {
        editorRef.current.innerHTML = "";
      } else if (
        body !== "" &&
        currentContent !== body &&
        !currentContent.includes(body.substring(0, 10))
      ) {
        // Only update if it's a significant change (like reset)
        editorRef.current.innerHTML = body;
      }
    }
  }, [body, showSource]);

  const handleAddEmail = () => {
    setShowForm(true);
  };

  const [sidebarWidth, setSidebarWidth] = React.useState(240);

  const handleCancel = () => {
    setShowForm(false);
    // Reset form fields
    setEmail("");
    setTemplate("");
    setSubject("");
    setBody("");
    if (editorRef.current) {
      editorRef.current.innerHTML = "";
    }
    setShowSource(false);
  };

  const handleSend = () => {
    // Handle send logic here
    console.log("Sending email...");
  };

  // Rich text editor commands
  const executeCommand = (command, value = null) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand(command, false, value);
      handleEditorChange();
    }
  };

  const handleSourceToggle = () => {
    if (showSource) {
      // Switch from source to visual
      const htmlContent = editorRef.current?.innerHTML || "";
      setBody(htmlContent);
    } else {
      // Switch from visual to source
      const htmlContent = editorRef.current?.innerHTML || "";
      setBody(htmlContent);
    }
    setShowSource(!showSource);
  };

  const handleEditorChange = () => {
    if (editorRef.current && !showSource && !isUpdatingRef.current) {
      isUpdatingRef.current = true;
      setBody(editorRef.current.innerHTML);
      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 0);
    }
  };

  // Handle paste to preserve formatting
  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  };

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />
      <Box
        sx={{
          p: { xs: 1, sm: 2 },
          bgcolor: "#ffffff",
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: "64px",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        {/* Topbar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            gap: { xs: 2, sm: 1 },
            bgcolor: "#ffffff",
            width: "100%",
          }}
        >
          {/* Add New Email Button */}
          <Button
            variant="contained"
            onClick={handleAddEmail}
            sx={{
              backgroundColor: "#2196F3",
              textTransform: "none",
              px: 3,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Add New Email
          </Button>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
              width: { xs: "100%", sm: "auto" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <TextField
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small"
              fullWidth
              sx={{
                minWidth: { sm: 180 },
                background: "#fff",
              }}
            />

            <Button
              variant="contained"
              sx={{ minWidth: 40, backgroundColor: "#42A5F5" }}
            >
              <SearchIcon />
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />

        {/* Email Form */}
        {showForm && (
          <Box sx={{ bgcolor: "#ffffff" }}>
            <Paper
              elevation={0}
              sx={{
                padding: { xs: "16px", sm: "24px" },
                maxWidth: "1000px",
                margin: "0 auto",
                bgcolor: "#ffffff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 2, sm: 3 },
                }}
              >
                {/* Row 1: Email Field */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      minWidth: { xs: "auto", sm: "120px" },
                      fontSize: { xs: "13px", sm: "14px" },
                      fontWeight: 500,
                      color: "#333333",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="eg. xx@xx.com,xx@xx.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#e0e0e0",
                        },
                      },
                    }}
                  />
                </Box>

                {/* Row 2: Template and Date Field */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: { xs: 1, sm: 2 },
                  }}
                >
                  <Typography
                    sx={{
                      minWidth: { xs: "auto", sm: "120px" },
                      fontSize: { xs: "13px", sm: "14px" },
                      fontWeight: 500,
                      color: "#333333",
                      ml: -2,
                    }}
                  >
                    Template
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: 1, sm: 2 },
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    <FormControl
                      size="small"
                      sx={{
                        minWidth: { xs: "100%", sm: "200px" },
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      <Select
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                        displayEmpty
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>N/A</em>
                        </MenuItem>
                        <MenuItem value="template1">Template 1</MenuItem>
                        <MenuItem value="template2">Template 2</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      size="small"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      placeholder="MM/DD/YYYY"
                      sx={{
                        minWidth: { xs: "100%", sm: "150px" },
                        width: { xs: "100%", sm: "auto" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#e0e0e0",
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>

                {/* Row 3: Subject Field */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      minWidth: { xs: "auto", sm: "120px" },
                      fontSize: { xs: "13px", sm: "14px" },
                      fontWeight: 500,
                      color: "#333333",
                    }}
                  >
                    Subject
                  </Typography>
                  <TextField
                    fullWidth
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#e0e0e0",
                        },
                      },
                    }}
                  />
                </Box>

                {/* Row 4: Body Field with Rich Text Editor Area */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "flex-start" },
                    gap: { xs: 1, sm: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      minWidth: { xs: "auto", sm: "120px" },
                      fontSize: { xs: "13px", sm: "14px" },
                      fontWeight: 500,
                      color: "#333333",
                      pt: { xs: 0, sm: 1 },
                    }}
                  >
                    Body
                  </Typography>
                  <Box
                    sx={{
                      flex: 1,
                      width: { xs: "100%", sm: "auto" },
                      overflow: "hidden",
                    }}
                  >
                    {/* Rich Text Editor Toolbar - Row 1 */}
                    <Box
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderBottom: "none",
                        bgcolor: "#f5f5f5",
                        padding: { xs: "4px 2px", sm: "2px 4px" },
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: { xs: "1px", sm: "2px" },
                        minHeight: { xs: "auto", sm: "30px" },
                        overflowX: { xs: "auto", sm: "visible" },
                      }}
                    >
                      {/* Source Button */}
                      <Button
                        size="small"
                        startIcon={
                          <CodeIcon
                            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                          />
                        }
                        onClick={handleSourceToggle}
                        sx={{
                          minWidth: "auto",
                          padding: { xs: "3px 6px", sm: "4px 8px" },
                          fontSize: { xs: "10px", sm: "11px" },
                          textTransform: "none",
                          color: "#333333",
                          bgcolor: "transparent",
                          "&:hover": {
                            bgcolor: "#e0e0e0",
                          },
                        }}
                      >
                        Source
                      </Button>

                      {/* File Operations */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("save")}
                        sx={{
                          padding: { xs: "3px", sm: "4px" },
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <SaveIcon
                          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                        />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {
                          setBody("");
                          if (editorRef.current)
                            editorRef.current.innerHTML = "";
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <NoteAddIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("open")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FolderOpenIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => window.print()}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <PrintIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Clipboard Operations */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("cut")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <ContentCutIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("copy")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <ContentCopyIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("paste")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <ContentPasteIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Undo/Redo */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("undo")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <UndoIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("redo")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <RedoIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Find/Replace */}
                      <IconButton
                        size="small"
                        onClick={() => {
                          const findText = prompt("Find:");
                          if (findText) executeCommand("find", findText);
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FindInPageIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {
                          const findText = prompt("Find:");
                          const replaceText = prompt("Replace with:");
                          if (findText && replaceText) {
                            const html = editorRef.current?.innerHTML || "";
                            if (editorRef.current)
                              editorRef.current.innerHTML = html.replace(
                                new RegExp(findText, "g"),
                                replaceText
                              );
                          }
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FindReplaceIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Select All */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("selectAll")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <SelectAllIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Remove Format */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("removeFormat")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatClearIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Text Formatting */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("bold")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatBoldIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("italic")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatItalicIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("underline")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatUnderlinedIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("strikeThrough")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <StrikethroughSIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("subscript")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <SubscriptIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("superscript")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <SuperscriptIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                    </Box>

                    {/* Rich Text Editor Toolbar - Row 2 */}
                    <Box
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderTop: "none",
                        borderBottom: "none",
                        bgcolor: "#f5f5f5",
                        padding: { xs: "4px 2px", sm: "2px 4px" },
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: { xs: "1px", sm: "2px" },
                        minHeight: { xs: "auto", sm: "30px" },
                        overflowX: { xs: "auto", sm: "visible" },
                      }}
                    >
                      {/* Lists */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("insertUnorderedList")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatListBulletedIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("insertOrderedList")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatListNumberedIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Indent */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("outdent")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatIndentDecreaseIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("indent")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatIndentIncreaseIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Blockquote */}
                      <IconButton
                        size="small"
                        onClick={() =>
                          executeCommand("formatBlock", "blockquote")
                        }
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatQuoteIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Horizontal Rule */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("insertHorizontalRule")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <HorizontalRuleIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Alignment */}
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("justifyLeft")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatAlignLeftIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("justifyCenter")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatAlignCenterIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("justifyRight")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatAlignRightIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("justifyFull")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatAlignJustifyIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Links */}
                      <IconButton
                        size="small"
                        onClick={() => {
                          const url = prompt("Enter URL:");
                          if (url) executeCommand("createLink", url);
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <LinkIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("unlink")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <LinkOffIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {
                          const anchor = prompt("Enter anchor name:");
                          if (anchor)
                            executeCommand("createLink", "#" + anchor);
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <AnchorIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Media */}
                      <IconButton
                        size="small"
                        onClick={() => {
                          const url = prompt("Enter image URL:");
                          if (url) executeCommand("insertImage", url);
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <ImageIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {
                          const url = prompt("Enter flash URL:");
                          if (url)
                            executeCommand(
                              "insertHTML",
                              `<embed src="${url}">`
                            );
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FlashOnIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {
                          const rows = prompt("Number of rows:");
                          const cols = prompt("Number of columns:");
                          if (rows && cols) {
                            executeCommand(
                              "insertHTML",
                              `<table border="1"><tr>${"<td></td>".repeat(
                                parseInt(cols)
                              )}</tr>${
                                "<tr>" +
                                "<td></td>".repeat(parseInt(cols)) +
                                "</tr>".repeat(parseInt(rows) - 1)
                              }</table>`
                            );
                          }
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <TableChartIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("insertHorizontalRule")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <HorizontalRuleIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {
                          executeCommand("insertText", "😀");
                        }}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <EmojiEmotionsIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => executeCommand("fontName", "Arial")}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <TextFieldsIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() =>
                          executeCommand(
                            "insertHTML",
                            '<div style="page-break-after:always"></div>'
                          )
                        }
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <InsertPageBreakIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {}}
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <LanguageIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                    </Box>

                    {/* Rich Text Editor Toolbar - Row 3 */}
                    <Box
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderTop: "none",
                        borderBottom: "none",
                        bgcolor: "#f5f5f5",
                        padding: { xs: "4px 2px", sm: "2px 4px" },
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: { xs: "1px", sm: "2px" },
                        minHeight: { xs: "auto", sm: "30px" },
                        overflowX: { xs: "auto", sm: "visible" },
                      }}
                    >
                      {/* Dropdowns */}
                      <FormControl
                        size="small"
                        sx={{
                          minWidth: { xs: "70px", sm: "80px" },
                          height: { xs: "24px", sm: "26px" },
                          bgcolor: "#ffffff",
                          border: "1px solid #ccc",
                        }}
                      >
                        <Select
                          value=""
                          displayEmpty
                          sx={{
                            height: { xs: "24px", sm: "26px" },
                            fontSize: { xs: "10px", sm: "11px" },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                          }}
                        >
                          <MenuItem
                            value=""
                            sx={{ fontSize: { xs: "10px", sm: "11px" } }}
                          >
                            Styles
                          </MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                        size="small"
                        sx={{
                          minWidth: { xs: "70px", sm: "80px" },
                          height: { xs: "24px", sm: "26px" },
                          bgcolor: "#ffffff",
                          border: "1px solid #ccc",
                        }}
                      >
                        <Select
                          value=""
                          displayEmpty
                          sx={{
                            height: { xs: "24px", sm: "26px" },
                            fontSize: { xs: "10px", sm: "11px" },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                          }}
                        >
                          <MenuItem
                            value=""
                            sx={{ fontSize: { xs: "10px", sm: "11px" } }}
                          >
                            Format
                          </MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                        size="small"
                        sx={{
                          minWidth: { xs: "70px", sm: "80px" },
                          height: { xs: "24px", sm: "26px" },
                          bgcolor: "#ffffff",
                          border: "1px solid #ccc",
                        }}
                      >
                        <Select
                          value=""
                          displayEmpty
                          sx={{
                            height: { xs: "24px", sm: "26px" },
                            fontSize: { xs: "10px", sm: "11px" },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                          }}
                        >
                          <MenuItem
                            value=""
                            sx={{ fontSize: { xs: "10px", sm: "11px" } }}
                          >
                            Font
                          </MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                        size="small"
                        sx={{
                          minWidth: { xs: "50px", sm: "60px" },
                          height: { xs: "24px", sm: "26px" },
                          bgcolor: "#ffffff",
                          border: "1px solid #ccc",
                        }}
                      >
                        <Select
                          value=""
                          displayEmpty
                          sx={{
                            height: { xs: "24px", sm: "26px" },
                            fontSize: { xs: "10px", sm: "11px" },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                          }}
                        >
                          <MenuItem
                            value=""
                            sx={{ fontSize: { xs: "10px", sm: "11px" } }}
                          >
                            Size
                          </MenuItem>
                        </Select>
                      </FormControl>

                      {/* Text Color */}
                      <IconButton
                        size="small"
                        onClick={() => {
                          const color = prompt(
                            "Enter color (hex, rgb, or name):",
                            "#000000"
                          );
                          if (color) executeCommand("foreColor", color);
                        }}
                        sx={{
                          padding: { xs: "3px", sm: "4px" },
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatColorTextIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Background Color */}
                      <IconButton
                        size="small"
                        onClick={() => {
                          const color = prompt(
                            "Enter background color (hex, rgb, or name):",
                            "#ffff00"
                          );
                          if (color) executeCommand("backColor", color);
                        }}
                        sx={{
                          padding: { xs: "3px", sm: "4px" },
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FormatColorFillIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Fullscreen */}
                      <IconButton
                        size="small"
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <FullscreenIcon sx={{ fontSize: "16px" }} />
                      </IconButton>

                      {/* Help */}
                      <IconButton
                        size="small"
                        sx={{
                          padding: "4px",
                          color: "#333333",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <HelpOutlineIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                    </Box>

                    {/* Text Editor Area */}
                    {showSource ? (
                      <TextField
                        fullWidth
                        multiline
                        rows={12}
                        value={body}
                        onChange={(e) => {
                          setBody(e.target.value);
                          if (editorRef.current) {
                            editorRef.current.innerHTML = e.target.value;
                          }
                        }}
                        placeholder="Enter HTML source here..."
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #e0e0e0",
                            borderTop: "none",
                            borderRadius: "0 0 4px 4px",
                            bgcolor: "#ffffff",
                            fontFamily: "monospace",
                            "& fieldset": {
                              border: "none",
                            },
                            "&:hover fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused fieldset": {
                              border: "none",
                            },
                            "& textarea": {
                              resize: "vertical",
                            },
                          },
                        }}
                      />
                    ) : (
                      <Box
                        ref={editorRef}
                        contentEditable
                        onInput={handleEditorChange}
                        onPaste={handlePaste}
                        suppressContentEditableWarning
                        sx={{
                          border: "1px solid #e0e0e0",
                          borderTop: "none",
                          borderRadius: "0 0 4px 4px",
                          bgcolor: "#ffffff",
                          minHeight: { xs: "250px", sm: "300px" },
                          padding: { xs: "8px", sm: "12px" },
                          outline: "none",
                          overflowY: "auto",
                          resize: "vertical",
                          fontSize: { xs: "13px", sm: "14px" },
                          fontFamily: "Arial, sans-serif",
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                      />
                    )}

                    {/* Bottom Bar */}
                    <Box
                      sx={{
                        height: "4px",
                        bgcolor: "#f5f5f5",
                        border: "1px solid #e0e0e0",
                        borderTop: "none",
                        borderRadius: "0 0 4px 4px",
                      }}
                    />
                  </Box>
                </Box>

                {/* Row 5: Action Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    gap: { xs: 1.5, sm: 2 },
                    width: "100%",
                    bgcolor: "#F5F5F5",
                    p: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleSend}
                    sx={{ textTransform: "none" }}
                  >
                    Send
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{ textTransform: "none" }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Email;
